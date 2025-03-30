import { Module } from '@nestjs/common';
import { MenuconfigService } from './menuconfig.service';
import { MenuconfigController } from './menuconfig.controller';
import { SqlService } from 'src/sql/sql/sql.service';

@Module({
  controllers: [MenuconfigController],
  providers: [MenuconfigService ,SqlService],
})
export class MenuconfigModule {}
