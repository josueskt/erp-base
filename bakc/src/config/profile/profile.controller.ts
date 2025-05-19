import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AsignamentProfileDto } from './dto/asignamentRouteProfile.dto';

@Controller('config/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }
  @Post('/routs')
 asignametRouteToProfile(@Body() asignament: AsignamentProfileDto) {
    return this.profileService.asignamentRouteProfile(asignament);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get('/users/:id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }
  @Get('/routs')
  findAllRouts(){
    return this.profileService.find_routs()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
