import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { SqlService } from 'src/sql/sql/sql.service';

@Injectable()
export class RegisterService {
  constructor(private readonly sql:SqlService){}
  create(createRegisterDto: CreateRegisterDto) {
    return 'This action adds a new register';
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
