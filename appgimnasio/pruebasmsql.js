const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '127.0.0.1', //localhost que estamos siempre es la misma o la dirección IP
    user: 'root',
    password: 'Admin12345',
    port: 3306,
    database: 'gimnasio' //nombre del esquema al que nos vamos a conectar
});

//a través de esta conexión conectate
conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        // conn.query('SELECT * FROM clientes', (err, result) => {
        //     console.log(result);
        // })

        // const nombre = "Ramón García";
        // const experiencia = 14;
        // conn.query(
        //     'INSERT INTO profesores (nombre, experiencia) VALUES (?,?)',
        //     [nombre, experiencia], (err, result) => {
        //         console.log(err)
        //         console.log(result)
        //     })

        //REPASAR SENTENCIAS DE MYSQL
        const nuevoProfesor = 91;
        const anteriorProfesor = 5;

        conn.query(
            'UPDATE clientes SET fk_profesor = ? WHERE fk_profesor = ?',
            [nuevoProfesor, anteriorProfesor], (err, result) => {
                console.log(err);
                console.log(result);
            }

        )

    }
})

