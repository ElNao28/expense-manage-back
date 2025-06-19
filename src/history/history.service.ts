import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entities/history.entity';
import { HandlerResponse } from 'src/helpers/Handler-Response.helper';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}
  public async findAll() {
    try {
      const listHistory = await this.historyRepository.find();
      return new HandlerResponse('Success', HttpStatus.OK, listHistory);
    } catch (error) {
      console.log(error);
    }
  }
}
