import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto {

    // @IsNumber()
    // @IsNotEmpty()
    // role_id: bigint;

    // @IsNumber()
    // @IsNotEmpty()
    // university_id: bigint;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    last_name: string;

    @Matches(/^09\d{9}$/)
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}
