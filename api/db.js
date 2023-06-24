import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config();

const pass = process.env.DB_SERVER_PASS;

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pass,
    database: "blog"
})