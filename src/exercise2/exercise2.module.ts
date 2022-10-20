import { Module } from '@nestjs/common';
import { Exercise2Controller } from './controllers/exercise2Controller';
import { Exercise2Repository } from './repositories/exercise2Repository';
import { Exercise2Service } from './services/exercise2Service';

@Module({
  controllers: [Exercise2Controller],
  providers: [Exercise2Service, Exercise2Repository],
})
export class Exercise2Module {}
