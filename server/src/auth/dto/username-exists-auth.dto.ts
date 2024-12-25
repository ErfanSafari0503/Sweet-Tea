import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UsernameExistsAuthDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    username: string;
}
