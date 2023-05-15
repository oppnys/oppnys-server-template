import response  from "../utils/response.js";
import {createHello, getHello}  from "../service/index.js";
import NetCode  from "../constants/NetCode.js";

export async function sayHello(ctx) {
    try{
        const resp = await getHello();
        ctx.body = response(NetCode.SUCCESS, {resp}, '获取成功')
    } catch (e) {
        ctx.body = response(NetCode.SUCCESS, null, `系统错误: ${e.message}`)
    }
}


export async function createHello(ctx) {
    try{
        const { message } = ctx.request.body;
        await createHello(message);
        ctx.body = response(NetCode.SUCCESS, null, '获取成功')
    } catch (e) {
        ctx.body = response(NetCode.SUCCESS, null, `系统错误: ${e.message}`)
    }
}

