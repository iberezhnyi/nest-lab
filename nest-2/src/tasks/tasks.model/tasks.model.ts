import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class TasksModel extends Document {
  @Prop()
  task: string

  @Prop()
  isDone: boolean
}

export const TasksModelSchema = SchemaFactory.createForClass(TasksModel)
