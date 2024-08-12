// import { Post } from '@nestjs/common'
// // import { UsersController } from './../../nest-1/src/users/users.controller';
// import {
//   MiddlewareConsumer,
//   Module,
//   NestModule,
//   RequestMethod,
// } from '@nestjs/common'
// import { LoggerMiddleware } from 'middleware/middleware'
// import { AppModule } from 'src/app.module'

// @Module({
//   imports: [AppModule],
// })
// export class UserModule implements NestModule {
//   async configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       //   .forRoutes(
//       //     { path: 'user', method: RequestMethod.GET },
//       //     { path: 'create', method: RequestMethod.ALL },
//       //   )
//       .exclude({ path: 'items', method: RequestMethod.POST })
//       .forRoutes(UsersController)
//   }
// }
