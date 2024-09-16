import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TaskDocument = Task & Document

@Schema()
export class Task {
  @Prop({
    required: [true, 'Task is required'],
    type: String,
  })
  task: string

  @Prop({
    type: Boolean,
    default: false,
  })
  isDone: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task)
