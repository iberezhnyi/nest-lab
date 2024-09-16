import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get mongoHost(): string {
    return this.configService.get<string>('MONGO_URI', 'default_mongo_uri')
  }

  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET', 'default_jwt_secret')
  }

  get port(): number {
    return this.configService.get<number>('PORT', 3000)
  }
}
