// import { configurations } from './configurations/index';
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get('port')

  const config = new DocumentBuilder()
    .setTitle('nest-lab API')
    .setDescription('nest-lab cool API')
    .setVersion('1.0')
    .addTag('API for nest LAB')
    .addServer('api')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('document', app, document)
  app.setGlobalPrefix('api')
  await app.listen(port)
}
bootstrap()
