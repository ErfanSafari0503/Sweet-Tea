import { IsNotEmpty, Matches } from 'class-validator';

export class LoginAuthDto {

    @Matches(/^09\d{9}$/, { message: 'phone_number is invalid' })
    phone_number: string;

    @IsNotEmpty()
    password: string;
}
