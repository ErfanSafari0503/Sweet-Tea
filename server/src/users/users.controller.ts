import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UpdateTeaDto } from './dto/update-tea.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
 constructor(private readonly usersService: UsersService) {}

    @Get(':phone')
    async getUserByPhone(@Param("phone") phone: string) {
        return this.usersService.getUserByPhone(phone);
      }

}