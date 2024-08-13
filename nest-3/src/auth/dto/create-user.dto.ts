import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  password: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsEnum(['starter', 'pro', 'business'])
  @IsOptional()
  subscription?: string

  @IsString()
  @IsOptional()
  token?: string | null
}
