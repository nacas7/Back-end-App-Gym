const { executeQuery, executeQueryOne } = require("../utils");

const getAll = () => {
    //tengo que resolverlo con una promesa porque la query tarda más que la propia función en sí

    // return new Promise((resolve, reject) => {

    //     db.query('select * from clientes', (err, result) => {
    //         if (err) {
    //             reject(err); //si hay error quiero que la promesa se rechaze 
    //         } else {
    //             resolve(result);
    //         }
    //     });

    // })

    return executeQuery('select * from clientes')
};



/**
 * Función que inserta un nuevo cliente
 * - Como parámetro recibe un ÚNICO objeto con las propiedades especificadas
 * - Retorna un promesa para gestionar la respuesta de dicha inserción
*/


//Recibe un objeto que tiene esas claves, es decir, un objeto del cual vamos a extraer esas claves
const createClient = (({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    // return new Promise((resolve, reject) => {
    //     db.query('INSERT INTO clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, sexo,
    //         new Date(), cuota, fecha_nacimiento, dni],
    //         (err, result) => {
    //             if (err) return reject(err);
    //             resolve(result);
    //         })

    // })
    return executeQuery('INSERT INTO clientes(nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, sexo, new Date(), cuota, fecha_nacimiento, dni])

});

//si tengo una query el segundo parámetro es siempre un array y meto tantos parámentros como ? tenga, tercer parámetro un CALLBACK SIEMPRE

const getById = (clientId) => {
    // return new Promise((resolve, reject) => {
    //     db.query('SELECT * FROM clientes WHERE id = ?', //esta query me devuelve un resultado o ninguno
    //         [clientId], (err, result) => {
    //             if (err) return reject(err);
    //             if (result.length === 0) return resolve(null) //aquí me está diciendo que si no encuentro resultado no es que no haya, si no que no existe, pero no hay error
    //             resolve(result[0]);//si es resultado es diferente a 0 significa que si que hay resultado
    //         })
    // })

    return executeQueryOne('SELECT * FROM clientes WHERE id = ?', [clientId])

};
const getByUser = ((usersLogin) => {
    return executeQuery('select * from clientes where fk_usuario=?', [usersLogin])

});

const deleteById = (clienteId) => {
    // return new Promise((resolve, reject) => {
    //     db.query('delete from clientes where id =?', [clienteId], (err, result) => {
    //         if (err) return reject(err);
    //         resolve(result);
    //     })
    // })

    return executeQuery('delete from clientes where id =?', [clienteId])

};

const getByProfesor = (profesorId) => {
    // return new Promise((resolve, reject) => {
    //     db.query('select * from clientes where fk_profesor = ?', [profesorId], (err, result) => {
    //         if (err) return reject(err)
    //         resolve(result)
    //     })

    // })

    return executeQuery('select * from clientes where fk_profesor = ?', [profesorId])
};

//recibe dos parámetros en el upDate, el id del cliente y un obejto con todos los datos que voy a pasar
const upDate = (clienteId, { nombre, apellidos, direccion, email, edad, sexo, cuota, dni }) => {
    // return new Promise((resolve, reject) => {
    //     db.query(
    //         'UPDATE clientes SET nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, cuota = ?, dni = ? WHERE id = ?',
    //         [nombre, apellidos, direccion, email, edad, sexo, cuota, dni, clienteId],
    //         (err, result) => {
    //             if (err) return reject(err)
    //             resolve(result)
    //         })
    // })

    executeQuery('UPDATE clientes SET nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, cuota = ?, dni = ? WHERE id = ?', [nombre, apellidos, direccion, email, edad, sexo, cuota, dni, clienteId])

};


//para poder utilizar este modulo luego en otro sitio tengo que exportarlo

module.exports = {
    // getAll: getAll -> EN cualquier objeto JS si el nombre de la clave y el valor es igual puedo poner directamente el nombre
    getAll,//puedo poner esto directamente si se llama igual
    createClient,
    getById,
    deleteById,
    getByProfesor,
    upDate,
    getByUser
}