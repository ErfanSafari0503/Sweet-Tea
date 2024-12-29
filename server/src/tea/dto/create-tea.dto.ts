import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEnum, IsDateString } from 'class-validator';

export class CreateTeaDto {
    @IsEnum(['donate', 'gift'])
    @IsOptional()
    type?: string;
  
    @IsNotEmpty()
    @IsNumber()
    receiver_user_id: number;
  
    @IsNotEmpty()
    @IsNumber()
    sender_user_id: number;
  
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
    status?: string;
  
    @IsDateString()
    @IsOptional()
    received_at?: Date;
  
    @IsDateString()
    @IsOptional()
    scheduled_start_at?: Date;
  
    @IsDateString()
    @IsOptional()
    scheduled_end_at?: Date;
  }
