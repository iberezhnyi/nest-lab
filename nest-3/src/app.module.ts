import { MongooseModule } from '@nestjs/mongoose'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getMongoConfig } from 'configs/mongo.config'
import { UsersModule } from './users/users.module'
import { LoggerMiddleware } from 'middleware/middleware'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
