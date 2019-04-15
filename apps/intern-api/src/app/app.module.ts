import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PracticeModule } from './practice/practice.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

const MONGO_URI='mongodb+srv://vladborsh:QWEASD123@cluster0-aahqr.mongodb.net/test?retryWrites=true'

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    PracticeModule,
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
