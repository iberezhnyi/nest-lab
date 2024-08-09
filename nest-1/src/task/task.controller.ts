import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskDto } from './task.dto'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getAllTasks()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() dto: TaskDto) {
    return this.taskService.createTask(dto)
  }

  @Patch(':id')
  async toggleIsDone(@Param('id') id: string) {
    return this.taskService.toggleDone(id)
  }
}
