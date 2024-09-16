import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppConfigService } from 'configs/AppConfigService'
// import { UsersModule } from './users/users.module'
// import { AuthModule } from './auth/auth.module'
// import { TasksModule } from './tasks/tasks.module'
import { LoggerMiddleware } from 'middleware/middleware'
// import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: AppConfigService) => ({
        uri: configService.mongoHost,
      }),
      inject: [AppConfigService],
    }),
  ],
  providers: [AppConfigService], // Добавляем AppConfigService как провайдер
  exports: [AppConfigService], // Экспортируем его, чтобы он был доступен в других модулях
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
