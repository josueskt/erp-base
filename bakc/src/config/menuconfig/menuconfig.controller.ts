import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MenuconfigService } from './menuconfig.service';
import { CreateMenuconfigDto } from './dto/create-menuconfig.dto';
import { UpdateMenuconfigDto } from './dto/update-menuconfig.dto';

@Controller('menuconfig')
export class MenuconfigController {
  constructor(private readonly menuconfigService: MenuconfigService) {}

  @Post()
  create(@Body() createMenuconfigDto: CreateMenuconfigDto) {
    
    return this.menuconfigService.create(createMenuconfigDto);
  }

  @Get()
  findAll() {
    return this.menuconfigService.findAll();
  }

  @Get('allroutes/:id')
  findOne(@Param('id') id: string) {
   
    return this.menuconfigService.findOne(id);
  }
  @Get('allroutesinnotprofile/:id')
  findAllRoutesNotInProfile(@Param('id') id: string, @Query('buscar')srq:string) {
   
    return this.menuconfigService.findAllRoutesIsnotprofile(id,srq);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuconfigDto: UpdateMenuconfigDto) {
    return this.menuconfigService.update(+id, updateMenuconfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuconfigService.remove(+id);
  }
}
