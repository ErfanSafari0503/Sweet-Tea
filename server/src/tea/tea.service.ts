import { Injectable } from '@nestjs/common';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTeaDto: CreateTeaDto) {
    const { type, receiver_user_id, sender_user_id, title, nickname, message, total_price, status, received_at, scheduled_start_at, scheduled_end_at } = createTeaDto;

  return this.prisma.gifts.create({
    data: {
      type: 'gift',
      receiver_user_id,
      sender_user_id,
      title,
      nickname,
      message,
      total_price,
      status: 'active',
      received_at,
      scheduled_start_at,
      scheduled_end_at,
    },
  });
  }


  async findAll(filters: {
    receiver_user_id?: number;
    sender_user_id?: number;
  }): Promise<any> {
    const { receiver_user_id, sender_user_id } = filters;

    return this.prisma.gifts.findMany({
      where: {
        receiver_user_id,
        sender_user_id,
      },
      include: {
        users_gifts_sender_user_idTousers: true,
        users_gifts_receiver_user_idTousers: true,
        gift_products: true,
      },
    });
  }

  async findById(id: number): Promise<any> {
    return this.prisma.gifts.findUnique({
      where: { id },
      include: {
        users_gifts_sender_user_idTousers: true,
        users_gifts_receiver_user_idTousers: true,
        gift_products: true,
      },
    });
  }

  update(id: number, updateTeaDto: UpdateTeaDto) {
    return `This action updates a #${id} tea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tea`;
  }
}
