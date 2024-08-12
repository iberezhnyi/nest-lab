// import { Injectable, NestMiddleware } from '@nestjs/common'
// import { NextFunction, Request, Response } from 'express'

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`)
//     next()
//   }
// }

// ______________________________________________________________

import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req
    const startTime = Date.now()

    res.on('finish', () => {
      const { statusCode } = res
      const contentLength = res.get('content-length')
      const responseTime = Date.now() - startTime

      console.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength || '0'}B - ${responseTime}ms`,
      )
    })

    next()
  }
}
