import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  }
}

const getMongoString = (configService: ConfigService): string => {
  const uri = configService.get<string>('DB_HOST')
  if (!uri) {
    throw new Error('DB_HOST is not defined in the environment variables')
  }
  return uri
}
