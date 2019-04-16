import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RESULT_SCHEMA_NAME } from '../../schema/result.schema';
import { ResultInterface } from '@intern/data';
import { query } from '../../../helper/query.helper';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(RESULT_SCHEMA_NAME) private readonly resultModel: Model<ResultInterface>,
  ) {}

  async create(practiceDto: ResultInterface): Promise<ResultInterface> {;
    return await new this.resultModel(practiceDto)
      .save();
  }

  async findAll(): Promise<ResultInterface[]> {
    return await this.resultModel
      .find()
      .exec();
  }

  async findByUserId(authorId: string): Promise<ResultInterface[]> {
    return await this.resultModel
      .find(query<ResultInterface>({ authorId }))
      .exec();
  }
}
