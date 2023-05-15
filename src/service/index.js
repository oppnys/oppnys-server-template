import connection from '../app/database.js';

/**
 * 插入一条数据
 * @param message
 * @returns {Promise<*>}
 */
export const create = async (message) => {
    const statement  = `INSERT INTO file (message)  VALUES (?);`;
    const [ result ] = await connection.execute(statement, [message]);
    return result;
}
/**
 * 读取数据库
 * @returns {Promise<*>}
 */
export const getHello = async () => {
    const statement = `SELECT * FROM hello`;
    const [result] = await connection.execute(statement)
    return result[0];
}
