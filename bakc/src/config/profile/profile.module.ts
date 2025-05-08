import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { SqlService } from 'src/sql/sql/sql.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,SqlService],
})
export class ProfileModule {}
