import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: bigint;

  @IsOptional()
  @IsNumber()
  balance?: bigint;

  @IsOptional()
  deactivated_at?: Date;
}
