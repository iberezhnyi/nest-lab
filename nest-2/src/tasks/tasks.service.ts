import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/createDto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { TasksModel } from './tasks.model/tasks.model'

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(TasksModel.name)
    private readonly tasksModel: Model<TasksModel>,
  ) {}

  async getAllTasks(): Promise<TasksModel[]> {
    return this.tasksModel.find().exec()
  }

  async createTask(dto: CreateTaskDto): Promise<TasksModel> {
    //   this.tasksModel.create(dto)

    const createdTask = new this.tasksModel(dto)
    return createdTask.save()
  }
}
