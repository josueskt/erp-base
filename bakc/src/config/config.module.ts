import { Module } from '@nestjs/common';
import { MenuconfigModule } from './menuconfig/menuconfig.module';

@Module({
  imports: [MenuconfigModule]
})
export class ConfigModule {}
