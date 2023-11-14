import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const { PORT = '5000' } = process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log(process.env)
  await app.listen(+PORT)
}

bootstrap()
