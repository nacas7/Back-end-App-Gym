const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/usuarios.model');


const checkToken = async (req, res, next) => {

    //1- Si el TOKEN viene incluido en la petición (headers)
    //comprobar si tenemos la cabecera de autorización
    //status(401)-> no es error del servidor simplemente no tiene autorización
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Debes incluir la cabecera de autorización' })
    }
    //2 - Que el TOKEN sea correcto
    const token = req.headers['authorization'];
    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY) //descodifico el string en un objeto

    } catch {
        return res.status(401).json({ error: 'El token está mal' });
    }

    //3 - Que el TOKEN no esté expirado

    console.log(obj.expiredAt);
    //si la fehca actual en formato unix es mayor a la fecha de expeiración es que ha caducado
    if (dayjs().unix() > obj.expiredAt) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    //4 - A partit del TOKEN recuperamos el usuario logado (el id de quién está entrando en nuestra app)
    // -TO DO: A partir de ese id, recuperamos el usuario de la BD


    const usuario = await getById(obj.usuarioId)

    req.user = usuario;
    console.log(req.user)

    next();

};

// MIDDLEWARW SIN PARÁMETROS
// const chckRole = (req, res, next) => {
//     if (req.user.roles !== 'admin') {
//         return res.json({ error: ' No eres administrador' })
//     }

//     console.log('Pasa por chekRole')

//     next()
// }

//MIDDLEWARE CON PARÁMENTROS
const chckRole = (role) => {
    return (req, res, next) => {
        if (req.user.roles !== role) {
            return res.status(403).json({ error: 'No puedes pasar' });

        }
        next()
    }
}



/**
 * RUTA GET /api/usuarios/profile
 * - muestra los datos del usuario logado
*/


module.exports = { checkToken, chckRole };