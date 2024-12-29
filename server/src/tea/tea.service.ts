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


  async getAllTeas(receiverUserId: number): Promise<any> {
    // Fetch related data using Prisma
    const gifts = await this.prisma.gifts.findMany({
      where: { receiver_user_id: receiverUserId },
      include: {
        gift_products: {
          include: {
            products: {
              include: {
                buffets: true,
              },
            },
          },
        },
        users_gifts_sender_user_idTousers: true,
      },
    });

    // Transform data to match SQL query structure
    const aggregatedGifts = gifts.map((gift) => {
      const sender = `${gift.users_gifts_sender_user_idTousers.first_name} ${gift.users_gifts_sender_user_idTousers.last_name}`;
      const products = gift.gift_products.map((gp) => ({
        product: gp.products.name,
        size: gp.products.size,
        buffet: gp.products.buffets.name,
      }));

      return products.map((product) => ({
        product: product.product,
        size: product.size,
        buffet: product.buffet,
        message: gift.message,
        nickname: gift.nickname,
        title: gift.title,
        sender,
        productCount: gift.gift_products.length, // Count products for each gift
      }));
    });

    // Flatten the array of arrays
    return aggregatedGifts.flat();
  }

  async getTeaById(id: number): Promise<any> {
    const gift = await this.prisma.gifts.findUnique({
      where: { id },
      include: {
        gift_products: {
          include: {
            products: {
              include: {
                buffets: true,
              },
            },
          },
        },
        users_gifts_sender_user_idTousers: true, // Include sender user details
      },
    });

    if (!gift) {
      throw new Error('Gift not found');
    }

    const sender = `${gift.users_gifts_sender_user_idTousers.first_name} ${gift.users_gifts_sender_user_idTousers.last_name}`;
    const products = gift.gift_products.map((gp) => ({
      product: gp.products.name,
      size: gp.products.size,
      buffet: gp.products.buffets.name,
    }));

    return products.map((product) => ({
      product: product.product,
      size: product.size,
      buffet: product.buffet,
      message: gift.message,
      nickname: gift.nickname,
      title: gift.title,
      sender,
      productCount: gift.gift_products.length, // Count products for each gift
    }));
  }

  update(id: number, updateTeaDto: UpdateTeaDto) {
    return `This action updates a #${id} tea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tea`;
  }
}
