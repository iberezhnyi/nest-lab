import { Module } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TasksController } from './tasks.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TasksModel, TasksModelSchema } from './tasks.model/tasks.model'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TasksModel.name, schema: TasksModelSchema },
    ]),
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
