import { Controller, Body, Param, Put, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from '../auth/user.schema'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers()
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto)
  }
}
