import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TeaService } from './tea.service';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}

  @Post()
  create(@Body() createTeaDto: CreateTeaDto, @Query('username') username: string) {
    return this.teaService.create(createTeaDto, username);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllGifts() {
      return this.teaService.getAllTeas();
    }
    
  // @Get()
  // async getGiftById() {
  //   return this.teaService.getTeaById(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return this.teaService.update(+id, updateTeaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teaService.remove(+id);
  }
}
