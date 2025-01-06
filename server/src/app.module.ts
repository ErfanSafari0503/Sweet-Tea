import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UniversitiesModule } from './universities/universities.module';
import { RolesModule } from './roles/roles.module';
import { PrismaModule } from './prisma/prisma.module';
import { TeaModule } from './tea/tea.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, UniversitiesModule, RolesModule, TeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
