import { Injectable, NotFoundException } from '@nestjs/common'
// import { CreateUserDto } from '../auth/dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '../auth/user.schema'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec()
    return users
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(userId, updateUserDto, {
        new: true,
        runValidators: true,
      })
      .exec()

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`)
    }

    return updatedUser
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec()
  }
}
