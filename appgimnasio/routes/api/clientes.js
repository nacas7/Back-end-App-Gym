// api/clientes

const router = require('express').Router();


//DE clienteModel puedo poner {getAll} así sólo me traigo lo que me interesa
const { getAll, createClient, getById, deleteById, upDate } = require('../../models/clientes.model'); //este es el objeto clientes.model.js

//PROMESAS CON THEN Y CATCH

// router.get('/', (req, res) => {
//     // res.send('Pinto la lista de clientes')
//     getAll()
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => {
//             res.json({ error: err.message });
//         });
// });

//http/:localhost:3000/api/clientes
// router.get('/', (req, res) => {
//     res.send('Ruta GET api/clientes')//res.send y res.end -> envían un texto plno sin más
//     const clientes = [
//      { nombre: 'Mario', apellidos: 'Girón', email: 'mario@gmail.com' }, { nombre: 'Irene', apellidos: 'Romero', email: 'irene@gmail.com' }, { nombre: 'Laura', apellidos: 'martín', email: 'laura@gmail.com' }
//    ];

//    voy a transformar la respuesta en un objeto json para luego poder manejarla en angular
//    res.json(clientes[0]);
// });

//PROMESAS CON ASYNC AWAIT

router.get('/', async (req, res) => {
    try {
        //Siempre que pasemos a través del middleware checkToken, en la propiedad req.user tenemos los datos del usuario logado
        console.log(req.user)
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });

    }
});


//recuperar el id del cliente
router.get('/:clienteId', async (req, res) => {
    let result;
    try {
        result = await getById(req.params.clienteId);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!result) {
        return res.json({ error: 'El id no es correcto' });
    }
    res.json(result);
});

router.post('/', (req, res) => {
    console.log(req.body);//me enseña el objeto en la terminal que estoy recogiendo


    // le paso esto el req.body porque me está pidiendo un objeto con todos esos parámetros, y con el req.body ya lo tengo

    createClient(req.body)
        .then(async result => {

            const resultById = await
                getById(result.insertId);
            res.json(resultById);//aquí devuelvo el resultado
        })
        .catch((err) => {
            res.json({ error: err.message }); //aquí devuelve el error
        })
});



router.put('/:clienteId', async (req, res) => {
    const result = await upDate(req.params.clienteId, req.body);
    res.json(result);

});


router.delete('/:clienteId', async (req, res) => {
    const result = await deleteById(req.params.clienteId);
    res.json(result);

});


module.exports = router;