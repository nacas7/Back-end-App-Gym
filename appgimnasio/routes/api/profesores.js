
const router = require('express').Router();
const { getByProfesor } = require('../../models/clientes.model')
const { getAll, createProfesor, getById, deleteById, upDate } = require('../../models/modelo-profesores');

router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        console.log(result.length);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }

});


router.get('/clientes', async (req, res) => {
    const profesores = await getAll();
    // res.json(profesores)
    for (let profesor of profesores) {
        profesor.clientes = await getByProfesor(profesor.id);
    }
    res.json(profesores);
});

router.get('/:profesorId', async (req, res) => {
    const result = await getById(req.params.profesorId)
    if (!result) {
        return res.json({ error: 'El profesor no existe' });
    }
    //Recupero todos los clientes por el id del profesor
    result.clientes = await getByProfesor(req.params.profesorId);
    res.json(result);



});

router.post('/', async (req, res) => {
    try {
        const result = await createProfesor(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.put('/:profesorId', async (req, res) => {
    const result = await upDate(req.params.profesorId, req.body);
    res.json(result)

});

router.delete('/:profesorId', async (req, res) => {
    const result = await deleteById(req.params.profesorId);
    res.json(result)

});


module.exports = router;