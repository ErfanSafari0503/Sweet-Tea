
import { HttpException, HttpStatus, Inject, Injectable, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from "bcrypt";
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UsernameExistsAuthDto } from './dto/username-exists-auth.dto';

@Injectable()
export class AuthService {

    constructor(
        @Inject(REQUEST) private readonly request: Request,
        private readonly prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async usernameExists(usernameExistsAuthDto: UsernameExistsAuthDto) {

        const user = await this.prisma.users.findFirst({
            where: { username: usernameExistsAuthDto.username }
        });

        return {
            exists: (user !== null),
        };
    }

    async register(registerAuthDto: RegisterAuthDto) {

        // const role = await this.prisma.roles.findFirst({ where: { id: registerAuthDto.role_id } });

        // if (role) throw new HttpException('Role Not Found.', HttpStatus.BAD_REQUEST);

        // const university = await this.prisma.roles.findFirst({ where: { id: registerAuthDto.university_id } });

        // if (university) throw new HttpException('University Not Found.', HttpStatus.BAD_REQUEST);

        const user = await this.prisma.users.findFirst({
            where: {
                OR: [
                    { phone_number: registerAuthDto.phone_number },
                    { username: registerAuthDto.username },
                ]
            }
        });

        if (user) throw new HttpException('User Already Exist.', HttpStatus.CONFLICT);

        const salt = await bcrypt.genSalt();

        const hash = await bcrypt.hash(registerAuthDto.password, salt);

        await this.prisma.users.create({
            data: {
                // role_id: registerAuthDto.role_id,
                // university_id: registerAuthDto.university_id,
                role_id: 1,
                university_id: 1,
                first_name: registerAuthDto.first_name,
                last_name: registerAuthDto.last_name,
                phone_number: registerAuthDto.phone_number,
                username: registerAuthDto.username,
                password: hash,
            }
        });

        return;
    }

    async login(loginAuthDto: LoginAuthDto): Promise<{ access_token: string }> {

        const user = await this.prisma.users.findFirst({ where: { phone_number: loginAuthDto.phone_number } });

        if (user) {

            const isMatch = await bcrypt.compare(loginAuthDto.password, user.password);

            if (isMatch) {

                return {
                    access_token: await this.jwtService.signAsync({
                        id: user.id,
                        phone_number: user.phone_number,
                    },
                        {
                            secret: process.env.JWT_SECRET,
                            expiresIn: '1w'
                        }),
                };
            }
        }

        throw new UnauthorizedException();
    }

    async profile() {

        const user = await this.prisma.users.findFirst({ where: { id: this.request['user'].id } });

        return {
            first_name: user.first_name,
            last_name: user.last_name,
            gender: user.gender,
            phone_number: user.phone_number,
            username: user.username,
            expire: new Date(this.request['user'].exp * 1000).toISOString(),
            created_at: user.created_at,
        };
    }
}
