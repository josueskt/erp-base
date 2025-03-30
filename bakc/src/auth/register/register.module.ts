import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { SqlService } from 'src/sql/sql/sql.service';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService,SqlService],
})
export class RegisterModule {}
