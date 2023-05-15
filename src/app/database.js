import mysql from 'mysql2'
import logger from "../utils/log.js";
import config from './nacos.js';

const connections = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_NAME,
    user: config.MYSQL_USER,
    password: config.MYSQL_PWD
});

connections.getConnection((err, connection) => {
    if(!err){
        logger.info(`数据库连接成功`)
    } else {
        logger.error(`数据库连接失败: ${err.message}`)
    }
})

export default connections.promise()