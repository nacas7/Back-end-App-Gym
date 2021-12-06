const express = require('express');
const router = express.Router();

const { getAll, getById, createClient, deleteById } = require('../models/clientes.model');


router.get('/', async (req, res) => {
    const clientes = await getAll();
    res.render('clientes/index',
        { arrClientes: clientes });
});
router.get('/new', (req, res) => {
    res.render('clientes/formulario')
});

router.get('/:idCliente', async (req, res) => {
    const cliente = await getById(req.params.idCliente)
    res.render('clientes/show', { cliente })
});

router.post('/create', async (req, res) => {
    await createClient(req.body);
    console.log(req.body)
    res.redirect('/clientes');
});

router.get('/edit', (req, res) => {
    res.render('clientes/formularioEdit')
});

router.post('/update', (req, res) => {
    res.send('Recibe un cliente y lo edita en BD')
});

router.get('/delete/:clienteId', async (req, res) => {
    await deleteById(req.params.clienteId)
    res.redirect('/clientes');
})


module.exports = router;

/**
 * GEt /clientes -/views/clientes/index.pug
 * GET /clientes/new -/views/clientes/formulario.pug
 * GET /clientes/edit -/views/clientes/formularioEdit.pug
*/