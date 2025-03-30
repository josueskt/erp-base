import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SqlService } from 'src/sql/sql/sql.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService,JwtService,SqlService],
})
export class LoginModule {}
