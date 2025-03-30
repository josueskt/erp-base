import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { JwtService } from '@nestjs/jwt';
import { SqlService } from 'src/sql/sql/sql.service';
@Injectable()
export class LoginService {
  private readonly jwtSecretKey = process.env.Key_Key;

  constructor( private readonly  jwt:JwtService , private readonly sql:SqlService){}
  async login(createLoginDto: CreateLoginDto) {
   
    const token = await this.jwt.signAsync(
      {
       id_user: createLoginDto.user,
       routs:[
        {
          name: 'Opción 1',
          direcion: "/profe/crear_autor", icono: "fas fa-user-plus"
      
        },
          {
            name: 'Opcion 1',
            open: false,
            icono: "fas fa-user-plus",
            subMenu: [
              {
                name: 'Subopcion 1-1',
                open: false,
                 icono: "fas fa-user-plus",
                subMenu: [
                  { name: 'SubSubopcion 1-1-1' ,
                     icono: "fas fa-user-plus",
                     direcion: "/profe/crear_autor",
                   },
                  { name: 'SubSubopcion 1-1-2',
                     icono: "fas fa-user-plus",
                     direcion: "/profe/crear_autor",
                   }
                ]
              },
              {
                name: 'Subopcion asdasdasdasd',
               direcion: "/profe/crear_autor", icono: "fas fa-user-plus"
      
              
              }
            ]
          }

       ],
      },{secret:this.jwtSecretKey,expiresIn:'7h'}
   
    );

    return {"token":token,createLoginDto}
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
