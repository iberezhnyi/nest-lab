import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './user.schema'
import { LoginUserDto } from './dto/login-user.dto'
// import { LocalAuthGuard } from './guards/local-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.registerUser(createUserDto)
  }

  //   @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto)
  }

  // async loginUser(
  //   @Body() createUserDto: Pick<CreateUserDto, 'email' | 'password'>,
  // ) {
  //   return this.authService.loginUser(
  //     createUserDto.email,
  //     createUserDto.password,
  //   )
  // }
}
