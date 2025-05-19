import { Injectable } from '@nestjs/common';
import { CreateMenuconfigDto } from './dto/create-menuconfig.dto';
import { UpdateMenuconfigDto } from './dto/update-menuconfig.dto';
import { SqlService } from 'src/sql/sql/sql.service';

@Injectable()
export class MenuconfigService {
  constructor(readonly sql:SqlService){}
  async create(createMenuconfigDto: CreateMenuconfigDto) {
    let fk_route:any
    if(!createMenuconfigDto.id_route){
      fk_route = await this.sql.query('insert into routs(name,icon,direction,fk_route) values($1,$2,$3,$4) returning id_route',[createMenuconfigDto.name,createMenuconfigDto.icon,createMenuconfigDto.direction,createMenuconfigDto.fk_route])
      createMenuconfigDto.fk_route = fk_route[0].id_route
    }else{
      fk_route = await this.sql.query('update routs set name= $1 , icon = $2 , direction = $3 ,fk_route = $4 where id_route = $5 returning id_route',[createMenuconfigDto.name,createMenuconfigDto.icon,createMenuconfigDto.direction,createMenuconfigDto.fk_route,createMenuconfigDto.id_route])
      createMenuconfigDto.fk_route = fk_route[0].id_route
    }
    for (let iten of createMenuconfigDto.subMenu){
        console.log(iten)
        this.create({
          fk_route:createMenuconfigDto.fk_route, 
          ...iten,
          subMenu: []
        })
      
    }
    return {message:"creado exitosamente"};

  }

  async findAll() {
  return await this.sql.query(`
    
    WITH RECURSIVE menu_tree AS (
    -- CTE para obtener el menú principal
    SELECT id_route, name, icon, direction, fk_route
    FROM routs
    WHERE fk_route IS NULL  
  
    UNION ALL
      -- CTE recursiva para obtener los submenús
    SELECT m.id_route, m.name, m.icon, m.direction, m.fk_route
    FROM routs m
    JOIN menu_tree mt ON m.fk_route = mt.id_route
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
    SELECT fk_route, json_agg(
        json_build_object('id_route',id_route,'icon', icon, 'name', name, 'direction', direction)
    ) AS submenu
    FROM routs
    WHERE fk_route IS NOT NULL
    GROUP BY fk_route
) submenus ON submenus.fk_route = mt.id_route
WHERE mt.fk_route IS NULL;  

    
    
    `)
  }

  async findOne(id: string) {
 return await this.sql.query('SELECT a.id_u_r , b.name  ruta FROM user_routes a  INNER JOIN routs b on a.fk_route = b.id_route where fk_profile = $1 ',[id])
  }

  async findAllRoutesIsnotprofile(id,busqueda?){
    return await this.sql.query('SELECT id_route value,name label from routs WHERE id_route  NOT IN(SELECT fk_route from user_routes where fk_profile = $1)',[id])
    
  }

  update(id: number, updateMenuconfigDto: UpdateMenuconfigDto) {
    return `This action updates a #${id} menuconfig`;
  }

 async remove(id: number) {
  
    await this.sql.query('delete from routs where id_route = $1',[id])
    return  { "message": "ruta eliminada" };
  }
}
