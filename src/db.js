import {createPool} from 'mysql2/promise';
import {DB_HOST,DB_PORT,DB_USER,DB_PASSWD,DB_NAME} from './config.js'

console.log(DB_HOST,DB_PORT,DB_USER,DB_PASSWD,DB_NAME)
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWD,
    database: DB_NAME ,
    port: DB_PORT
}) 
