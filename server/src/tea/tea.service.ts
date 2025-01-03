import { Inject, Injectable } from '@nestjs/common';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TeaService {
  constructor(
          @Inject(REQUEST) private readonly request: Request,
          private readonly prisma: PrismaService,
          private jwtService: JwtService,) {}

  async create(createTeaDto: CreateTeaDto) {
    const { product_id, type, receiver_user_id, sender_user_id, title, nickname, message, total_price, status, received_at, scheduled_start_at, scheduled_end_at, count } = createTeaDto;
    
    const gift = await this.prisma.gifts.create({
      data: {
        type,
        receiver_user_id,
        sender_user_id: type.toLowerCase() === 'donate' ? sender_user_id : null,
        title,
        nickname,
        message,
        total_price,
        status,
        received_at,
        scheduled_start_at,
        scheduled_end_at,
      },
    });
    
        var gift_products = []
    
        for (let index = 0; index < count; index++) {
          gift_products[index] = this.prisma.gift_products.create({
            data: {
              gift_id: gift.id,
              product_id: product_id,
            },
            select: {
              id: true,
            },
          });
          
        }
        return {
          "gift_products" : gift_products,
          "gift": gift
        }
  }


  async getAllTeas(receiverUserId: number): Promise<any> {
    // Fetch related data using Prisma
    const gifts = await this.prisma.gifts.findMany({
      where: { receiver_user_id: this.request['user'].id },
      include: {
        users_gifts_receiver_user_idTousers: true,
        users_gifts_sender_user_idTousers: true,
        gift_products: {
          include: {
            products: {
              include: {
                buffets: true,
              },
            },
          },
        },
      },
    });

    let giftCount = 0
    const aggregatedGifts = gifts.map(async (gift) => {
      giftCount += gift.gift_products.length
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

    const reciverUser = await this.prisma.users.findUnique({where: {id: this.request['user'].id}})
      
    const wallet = await this.prisma.wallets.findFirst({
      where: {user_id: reciverUser.id},
      select: {balance: true}
    })


    return {"gifts": aggregatedGifts.flat(),
      "walletAmount": wallet.balance, 
      "firstName": reciverUser.first_name,
      "giftCount": giftCount,
    };
  }

  async getTeaById(id: number): Promise<any> {
    const gift = await this.prisma.gifts.findFirst({
      where: { receiver_user_id: this.request['user'].id },
      include: {
        users_gifts_receiver_user_idTousers: true,
        users_gifts_sender_user_idTousers: true,
        gift_products: {
          include: {
            products: {
              include: {
                buffets: true,
              },
            },
          },
        },
      },
    });

    const reciverUser = gift.users_gifts_receiver_user_idTousers

    const wallet = await this.prisma.wallets.findFirst({
      where: {user_id: reciverUser.id},
      select: {balance: true}
    })

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
      firstName: reciverUser.first_name,
      wallentAmount: wallet.balance,
      productCount: gift.gift_products.length,
    }));
  }

  update(id: number, updateTeaDto: UpdateTeaDto) {
    return `This action updates a #${id} tea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tea`;
  }
}
