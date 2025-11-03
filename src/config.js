import { config } from "dotenv";
config()
/* */
console.log(process.env.PORT_ND)
console.log(process.env.PORT_DB)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWD)
console.log(process.env.DB_NAME)

export const PORT = process.env.PORT_ND || 3000
export const DB_PORT= process.env.PORT_DB || 3306
export const DB_HOST= process.env.DB_HOST || "localhost"
export const DB_USER= process.env.DB_USER || "root"
export const DB_PASSWD= process.env.DB_PASSWD || ""
export const DB_NAME= process.env.DB_NAME || "first_api"