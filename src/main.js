import app from './app/index.js';
import('./app/database.js')
import config from './app/config.js';
import logger from './utils/log.js';
import route from './router/index.js';

app.use(route.routes())
app.use(route.allowedMethods())

app.listen(config.APP_PORT, () => {
    logger.info(`The server running at https://${config.APP_HOST}:${config.APP_PORT}`)
})