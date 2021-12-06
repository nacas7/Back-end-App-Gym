
const mysql = require('mysql2'); //requerir la librería mysql

//si yo generase un objeto el cual le puedo pedir o lanzar las query directamente
const pool = mysql.createPool({
    host: process.env.DB_HOST, //localhost que estamos siempre es la misma o la dirección IP
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

global.db = pool;// con esto creo una variable de forma global y la puedo tener disponible en todos mis archivos