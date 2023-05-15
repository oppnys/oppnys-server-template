import logger from "../utils/log.js";

export async function helloMiddleware(ctx, next) {
    logger.info('helloMiddleware 被执行了')
    next()
}