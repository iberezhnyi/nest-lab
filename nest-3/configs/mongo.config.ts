// import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'
import { AppConfigService } from './AppConfigService'
// import { CustomConfigService } from './AppConfigService'

export const getMongoConfig = async (
  configService: AppConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  }
}

const getMongoString = (configService: AppConfigService): string => {
  const uri = configService.mongoHost
  if (!uri) {
    throw new Error('DB_HOST is not defined in the environment variables')
  }
  return uri
}
