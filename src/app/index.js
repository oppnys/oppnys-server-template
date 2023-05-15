import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import response from "../utils/response.js";
import logger from "../utils/log.js";
import NetCode from "../constants/NetCode.js";

const app = new Koa()

app.use(async (ctx, next) => {
    logger.info(ctx.url);
    await next();
})
app.use(bodyParser())

app.on('error', (error, ctx) => {
    ctx.body = response(NetCode.ERROR, error.message, true)
})

export default app;
