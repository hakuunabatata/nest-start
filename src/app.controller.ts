import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
import { User } from '@prisma/client'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello()
  }

  @Get('users')
  async getUsers(): Promise<{ users: User[] }> {
    return { users: await this.prisma.user.findMany() }
  }
}
