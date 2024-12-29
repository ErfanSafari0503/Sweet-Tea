import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeaService } from './tea.service';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}

  @Post()
  create(@Body() createTeaDto: CreateTeaDto) {
    return this.teaService.create(createTeaDto);
  }

  
    @Get()
    async getAllTeas(
      @Query('receiver_user_id') receiver_user_id?: number,
      @Query('sender_user_id') sender_user_id?: number,
      @Query('status') status?: string,
    ): Promise<any> {
      return this.teaService.findAll({ receiver_user_id, sender_user_id });
    }
  
    @Get(':id')
    async getTeaById(@Param('id') id: number): Promise<any> {
      return this.teaService.findById(id);
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return this.teaService.update(+id, updateTeaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teaService.remove(+id);
  }
}
