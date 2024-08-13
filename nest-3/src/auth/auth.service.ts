import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { User, UserDocument } from './user.schema'
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    })

    return newUser.save()

    // const newUser = new this.userModel(createUserDto)
    // return newUser.save()
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ email: loginUserDto.email })

    if (!user) {
      throw new UnauthorizedException()
    }

    const passwordCompare = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    )

    if (!passwordCompare) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user._id }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }

    // const { password, ...result } = user
    // return result
  }
}
