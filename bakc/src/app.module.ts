import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login/login.module';
import { SqlService } from './sql/sql/sql.service';
import { ConfigModule } from './config/config.module';
import { RegisterModule } from './auth/register/register.module';

@Module({
  imports: [LoginModule, ConfigModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService, SqlService],
})
export class AppModule {}
