import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { HistoryModule } from './history/history.module';
import { CashModule } from './cash/cash.module';

@Module({
  imports: [ExpensesModule, HistoryModule, CashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
