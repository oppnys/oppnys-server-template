import logger from "./log.js";
import NetCode from '../constants/NetCode.js';


export default function response(code, data, message) {
    const timestamp = new Date().getTime();
    if(code !== NetCode.SUCCESS) {
        logger.error(message)
        return { code, message, timestamp }
    }
    logger.info(message)
    return { code: NetCode.SUCCESS, data, message, timestamp}
}