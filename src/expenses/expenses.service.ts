import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';
import { HandlerResponse } from 'src/helpers/Handler-Response.helper';
import { History } from 'src/history/entities/history.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}
  public async create(createExpenseDto: CreateExpenseDto) {
    try {
      const newExpense = this.expenseRepository.create(createExpenseDto);
      const saveExpense = await this.expenseRepository.save(newExpense);
      await this.createHistory(saveExpense);
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

  private async createHistory(expense: Expense): Promise<void> {
    try {
      const newRegister = this.historyRepository.create({
        amount: expense.amount,
        movementDate: expense.purchaseDate,
      });
      await this.historyRepository.save(newRegister);
    } catch (error) {
      console.log(error);
    }
  }
}
