import { Module } from '@nestjs/common';
import { MenuconfigModule } from './menuconfig/menuconfig.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [MenuconfigModule, ProfileModule],
  providers: []
})
export class ConfigModule {}
