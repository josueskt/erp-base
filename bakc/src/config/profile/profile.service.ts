import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { SqlService } from 'src/sql/sql/sql.service';
import { AsignamentProfileDto } from './dto/asignamentRouteProfile.dto';
import { of } from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(readonly slqS:SqlService){}

async asignamentRouteProfile(asignament:AsignamentProfileDto){
  for(let asig of asignament.Routs){
    await this.slqS.query('insert into user_routes(fk_profile,fk_route) values($1,$2) ',[asignament.ida,asig])
  }
  return { "message": "rutas asignadas exitosamente" }
}

  async create(createProfileDto: CreateProfileDto) {
    await this.slqS.query('insert into profiles(name) values($1)',[createProfileDto.name])
    return { "message": "Perfil Creado" }
     
  }

  async findAll() {
return await this.slqS.query('select * from profiles')
  }

  async findOne(id: number) {
return await this.slqS.query('select u.name , email from profiles p left join user_profile up on p.id_profile = up.fk_profile')

  }

   async find_routs(){
    return await this.slqS.query('select * from  routs')
   }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
