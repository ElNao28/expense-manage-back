import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';
import { HandlerResponse } from 'src/helpers/Handler-Response.helper';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}
  public async create(createExpenseDto: CreateExpenseDto) {
    try {
      const newExpense = this.expenseRepository.create(createExpenseDto);
      const saveExpense = await this.expenseRepository.save(newExpense);
      return new HandlerResponse(
        'Register success',
        HttpStatus.OK,
        saveExpense,
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async findAll() {
    try {
      const findAllRegisters = await this.expenseRepository.find();
      return new HandlerResponse(
        'Find registers',
        HttpStatus.OK,
        findAllRegisters,
      );
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
