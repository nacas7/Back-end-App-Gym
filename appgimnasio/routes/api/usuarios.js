const { createRegistro, getByEmail } = require('../../models/usuarios.model');
const { getByUser } = require('../../models/clientes.model')
const bcrypt = require('bcryptjs');
const { createToken } = require('../../utils')
const router = require('express').Router();
const { checkToken } = require('../middlewares');


router.get('/profile', checkToken, (req, res) => {
    res.send('funciona')
});

router.get('/clientes', checkToken, async (req, res) => {
    const clientes = await getByUser(req.user.id)//con el req.user accedo al token
    res.json(clientes)
})




router.post('/registro', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        const result = await createRegistro(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }

});

router.post('/login', async (req, res) => {
    //1- ¿Existe el email en la base de datos?

    const usuario = await getByEmail(req.body.email)

    if (!usuario) {
        return res.json({ error: 'Error de usuario y/o password 1' })
    }

    //2- compruebo si coinciden las password
    // console.log(req.body.password, usuario.password);
    const iguales = bcrypt.compareSync(req.body.password, usuario.password)
    if (iguales) {
        //el token se genera cuando alguien se registra en la app
        res.json({ token: createToken(usuario) });
    } else {
        return res.json({ error: 'Error de usuario y/o password 2' })
    };




});


module.exports = router;