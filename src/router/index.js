import Router from 'koa-router';
import {sayHello, createHello} from "../controller/index.js";
import {helloMiddleware} from "../middleware/hello.js";

const routes = new Router()

// get 请求
routes.get('/hello',helloMiddleware, sayHello)

// post 请求
routes.post('/hello', createHello)

export default routes
