import { Injectable } from '@nestjs/common'
import { TaskDto } from './task.dto'

@Injectable()
export class TaskService {
  private TASKS: { id: number; name: string; isDone: boolean }[] = []

  getAllTasks() {
    return this.TASKS
  }

  createTask(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length,
      name: dto.name,
      isDone: false,
    })
    return this.TASKS
  }

  toggleDone(id: string) {
    const task = this.TASKS.find((task) => task.id === +id)
    task.isDone = !task.isDone
    return task
  }
}
