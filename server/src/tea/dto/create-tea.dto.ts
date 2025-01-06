import { $Enums } from '@prisma/client';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
  IsDateString,
} from 'class-validator';

export class CreateTeaDto {
  @IsNotEmpty()
  @IsNotEmpty()
  product_id: number;

  @IsEnum(['donate', 'gift'])
  @IsOptional()
  type?: $Enums.gifts_type;

  @IsOptional()
  @IsNumber()
  receiver_user_id?: bigint;

  @IsOptional()
  @IsNumber()
  sender_user_id?: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsOptional()
  message?: string;

  @IsNotEmpty()
  @IsNumber()
  total_price: number;

  @IsEnum(['active', 'received', 'cancelled'])
  @IsOptional()
  status?: $Enums.gifts_status;

  @IsDateString()
  @IsOptional()
  received_at?: Date;

  @IsDateString()
  @IsOptional()
  scheduled_start_at?: Date;

  @IsDateString()
  @IsOptional()
  scheduled_end_at?: Date;

  @IsNotEmpty()
  @IsString()
  count: number;
}
