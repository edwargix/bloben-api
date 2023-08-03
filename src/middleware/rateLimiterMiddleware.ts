import { NextFunction, Request, Response } from 'express';

import { RATE_LIMIT } from '../utils/enums';

export const rateLimiterMiddleware = (
  _: RATE_LIMIT
): ((req: Request, res: Response, next: NextFunction) => any) => {
  return async (__, ___, next) => {
    return next();

    // try {
    //   const realIP: string = req.header(X_REAL_IP);

    //   if (realIP) {
    //     const record: any = await RateLimiter.get(realIP, req);

    //     if (record) {
    //       logger.warn(
    //         `Too many requests from ${realIP} for URL: ${req.originalUrl} METHOD: ${req.method}`,
    //         [LOG_TAG.REST, LOG_TAG.SECURITY]
    //       );
    //       throw throwError(429, 'Too many requests', req);
    //     } else {
    //       await RateLimiter.set(realIP, req, limit);

    //       return next();
    //     }
    //   }

    //   return next();
    // } catch (e) {
    //   return next(e);
    // }
  };
};
