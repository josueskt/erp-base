import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { JwtService } from '@nestjs/jwt';
import { SqlService } from 'src/sql/sql/sql.service';

import * as argon2 from "argon2";
@Injectable()
export class LoginService {
  private readonly jwtSecretKey = process.env.Key_Key;
  private readonly secretKey = Buffer.from(process.env.Key_Key || "MI_CLAVE_SUPER_SECRETA");

  constructor( private readonly  jwt:JwtService , private readonly sql:SqlService){}
  async login(createLoginDto: CreateLoginDto) {
       // throw new HttpException('Usuario no encontrado', HttpStatus.BAD_REQUEST)
    const usr =  await this.sql.query('SELECT * FROM "user"  where email = $1',[createLoginDto.email])
    if(!usr[0]){
        throw new HttpException('Usuario o contraseña incorrecta', HttpStatus.BAD_REQUEST)
    }
    const verificado:boolean =  await argon2.verify(usr[0].pass, createLoginDto.pass, { secret: this.secretKey });
    if(!verificado){
      throw new HttpException('Usuario o contraseña incorrecta', HttpStatus.BAD_REQUEST)
    } 



    const ruts = await this.sql.query(`
      WITH RECURSIVE menu_tree AS (
    SELECT DISTINCT r.id_route, r.name, r.icon, r.direction, r.fk_route
    FROM routs r
    JOIN user_routes ur ON r.id_route = ur.fk_route
    WHERE r.fk_route IS NULL AND ur.fk_profile = 1 -- Solo las rutas principales del perfil

    UNION ALL
    SELECT m.id_route, m.name, m.icon, m.direction, m.fk_route
    FROM routs m
    JOIN menu_tree mt ON m.fk_route = mt.id_route
    JOIN user_routes ur ON m.id_route = ur.fk_route 
    WHERE ur.fk_profile = 1 AND m.fk_route IS NULL
)
SELECT 
    mt.id_route,
    mt.icon,
    mt.name,
    mt.direction,
    COALESCE(submenus.submenu, '[]') AS subMenu
FROM 
    menu_tree mt
LEFT JOIN (
    -- Subconsulta para obtener los submenús como un array JSON
    SELECT r.fk_route, json_agg(DISTINCT jsonb_build_object(
        'id_route', id_route, 
        'icon', icon, 
        'name', name, 
        'direction', direction
    )) AS submenu
    FROM routs r
    JOIN user_routes ur ON r.id_route = ur.fk_route

    WHERE r.fk_route IS NOT NULL AND ur.fk_profile = 1
    GROUP BY r.fk_route
) submenus ON submenus.fk_route = mt.id_route
ORDER BY mt.id_route;
      
      `)
    
    const token = await this.jwt.signAsync(
      {
        user:{"name":usr[0].name,"email":usr[0].email,"active":usr[0].active,"id_user":usr[0].id_user},
       routs:ruts,
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
