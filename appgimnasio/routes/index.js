var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {//se relaciona con index.pug, va a salir todo lo que haya allí
  res.render('index', {
    title: 'Express',
    animlaes: ['perro', 'gato', 'loro', 'colibrí', 'rana', 'caballo', 'chimpancé', 'marmota', 'castor', 'topo'],
    clases: ['clase1', 'clase2', 'clase3']
  });
});


//GET /contacto

router.get('/contacto', (req, res) => {
  res.render('contacto')
});


module.exports = router;
