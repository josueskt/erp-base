import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { SqlService } from 'src/sql/sql/sql.service';
import * as argon2 from "argon2";
@Injectable()
export class RegisterService {
  constructor(private readonly sql: SqlService) { }
  private readonly secretKey = Buffer.from(process.env.Key_Key || "");
  async create(createRegisterDto: CreateRegisterDto) {
    try {
      if (createRegisterDto.pass !== createRegisterDto.passconfirm) {
        throw new HttpException('Las contraseñas no son iguales', HttpStatus.BAD_REQUEST)
      }
      const profile_id = await this.sql.query('select id_profile from profiles where id_profile = $1 returning id_profile;', [createRegisterDto.fk_profile])
      if (!profile_id[0].id_profile) {
        throw new HttpException('Perfil no encontrado', HttpStatus.BAD_REQUEST)
      }
      const secret_pass = await argon2.hash(createRegisterDto.pass, {
        type: argon2.argon2id,
        memoryCost: 2 *16,
        timeCost: 3,
        parallelism: 1,
        secret: this.secretKey,
      });
      const id_user = await this.sql.query('INSERT INTO "user" (name,email,pass,active) VALUES ($1,$2,$3,$4) returning id_user;', [createRegisterDto.name, createRegisterDto.email, secret_pass, true])
      await this.sql.query('INSERT INTO user_profile (fk_user,fk_profile) VALUES ($1) ', [id_user[0].id_user, profile_id[0].id_profile])
      return { "message": "usuario creado exitosamente" };
    } catch (error) {
      throw new HttpException('error de registro de usuario ' + error, HttpStatus.BAD_REQUEST)

    }

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
