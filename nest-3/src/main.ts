import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
// import { LoggerMiddleware } from 'middleware/middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const port = configService.get('port')

  // app.use(LoggerMiddleware)

  app.setGlobalPrefix('api')
  await app.listen(port, () => console.log(`Listen on port ${port}`))
}

bootstrap()
// {
//   abortOnError: false
// }
