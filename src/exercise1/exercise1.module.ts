import { Module } from '@nestjs/common';
import { Exercise1Controller } from './controllers/exercise1Controller';
import { Exercise1Repository } from './repositories/exercise1Repository';
import { Exercise1Service } from './services/exercise1Service';

@Module({
  controllers: [Exercise1Controller],
  providers: [Exercise1Service, Exercise1Repository],
})
export class Exercise1Module {}
