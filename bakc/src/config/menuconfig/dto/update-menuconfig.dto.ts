import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuconfigDto } from './create-menuconfig.dto';

export class UpdateMenuconfigDto extends PartialType(CreateMenuconfigDto) {}
