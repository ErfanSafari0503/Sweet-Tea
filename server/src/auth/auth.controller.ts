
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UsernameExistsAuthDto } from './dto/username-exists-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('username-exists')
    usernameExists(@Body() usernameExistsAuthDto: UsernameExistsAuthDto) {
      return this.authService.usernameExists(usernameExistsAuthDto);
    }

    @Post('register')
    register(@Body() registerAuthDto: RegisterAuthDto) {
      return this.authService.register(registerAuthDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginAuthDto: LoginAuthDto) {
        return this.authService.login(loginAuthDto);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile() {
        return this.authService.profile();
    }
}
