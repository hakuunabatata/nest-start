import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma'
import { PrismaClient } from '@prisma/client'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaClient],
})
export class AppModule {}
