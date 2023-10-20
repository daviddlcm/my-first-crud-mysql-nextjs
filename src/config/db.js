import {createPool} from 'mysql2/promise';
export const pool = createPool({
    host:"localhost",
    user:process.env.USUARIO,
    password:process.env.PASSWORD,
    port:"3306",
    database:"products"
})