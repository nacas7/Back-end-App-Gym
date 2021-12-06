
const jwt = require('jsonwebtoken');//generar el token
const dayjs = require('dayjs');


//MÉTODO PARA LANZAR QUERY
const executeQuery = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            resolve(result)
        })
    })
};

//query que lanzan un solo elemento
const executeQueryOne = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null)
            resolve(result[0])
        })
    })
};

//esta función sólo la recibe el usuario una vez actualizado, que genera un toke y nos devuelve un string codificao
//nos generan token
const createToken = ((usuario) => {
    const obj = {
        usuarioId: usuario.id,
        expiredAt: dayjs().add(5, 'days').unix()
    }

    return jwt.sign(obj, process.env.SECRET_KEY);
    //Sacar estos valores a un fichero de entorno, codificar el token en un string


})

module.exports = {
    executeQuery,
    executeQueryOne,
    createToken
};