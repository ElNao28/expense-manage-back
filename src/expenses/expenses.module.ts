import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { History } from 'src/history/entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, History])],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class ExpensesModule {}
