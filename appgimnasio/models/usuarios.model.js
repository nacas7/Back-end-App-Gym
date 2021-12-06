const { executeQuery, executeQueryOne } = require("../utils");

const createRegistro = ({ nombre, username, email, password }) => {
    executeQuery('Insert into usuarios (nombre, username, email, password) values( ?,?,?,?)',
        [nombre, username, email, password])

};

const getByEmail = ((email) => {
    return executeQueryOne('select * from usuarios where email =?', [email]);
});

const getById = ((usuarioId) => {
    return executeQueryOne('select * from usuarios where id =?', [usuarioId]);
});




module.exports = {
    createRegistro,
    getByEmail,
    getById,

}