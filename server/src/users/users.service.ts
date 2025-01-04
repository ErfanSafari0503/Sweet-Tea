import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService,){}
    async getUserByPhone(phone: string) {
        return await this.prisma.users.findFirst({where:{ phone_number: phone}, 
        select: {id: true}
        })
    }

 }
