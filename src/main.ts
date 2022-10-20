import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Exercise1Controller } from './exercise1/controllers/exercise1Controller';
import { Exercise2Controller } from './exercise2/controllers/exercise2Controller';

async function bootstrap() {
  const application: INestApplicationContext =
    await NestFactory.createApplicationContext(AppModule);

  const command: string = process.argv[2];
  switch (command) {
    case 'exercise1':
      const exercise1 = application.get(Exercise1Controller);
      console.log('EXERCISE 1: \n');
      exercise1.getNumbers(process.argv[3]);
      break;
    case 'exercise2':
      const exercise2 = application.get(Exercise2Controller);
      console.log('EXERCISE 2: \n');
      exercise2.countriesMapping();
      break;
    default:
      console.log('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
