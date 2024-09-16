import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppConfigService } from 'configs/AppConfigService'
// import { AppConfigService } from './app.config.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(AppConfigService)
  const port = configService.port
  await app.listen(port)
}
bootstrap()
