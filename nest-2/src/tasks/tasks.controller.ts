import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateTaskDto } from './dto/createDto'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  async getTasks() {
    return this.tasksService.getAllTasks()
  }

  @Post()
  //   @UsePipes(new ValidationPipe())
  async createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto)
  }
}
