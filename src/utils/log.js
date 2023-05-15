import winston from "winston";
import path from 'path';
import {fileURLToPath} from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            format: winston.format.printf(info => `${(info.timestamp)} [oppnys-files] [${info.level}] ${info.message}`),
            filename: path.join(__dirname, '../../logs', 'console.log'),
        }),
    ],
    maxsize: 2048,
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD hh:mm:ss:SSS'}),
        winston.format.prettyPrint({
            depth: 4,
            colorize: true
        }),
    )
})


export default logger
