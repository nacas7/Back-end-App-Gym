const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');//importo en el api las rutas que quiero a partir de esta
const apiProfesoresRouter = require('./api/profesores');
const uruariosRouter = require('./api/usuarios');
const { checkToken } = require('./middlewares');
const { chckRole } = require('./middlewares');

//http/:localhost:3000/api
router.use('/clientes', checkToken, chckRole('admin'), apiClientesRouter);//tengo que poner la ruta

router.use('/profesores', checkToken, apiProfesoresRouter);
router.use('/usuarios', uruariosRouter);


module.exports = router;