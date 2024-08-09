import { Module } from '@nestjs/common'
import { TaskModule } from './task/task.module'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { configurations } from './configurations'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configurations] }),
    TaskModule,
    UsersModule,
  ],
})
export class AppModule {}
