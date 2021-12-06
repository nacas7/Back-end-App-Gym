const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientesRouter = require('./routes/clientes');
const apiRouter = require('./routes/api');


//el .env para poder guardar mis datos de la BD y al subirlo que no se vean
require('dotenv').config();




//Configuración de la base datos
//no lo guardo en una variable porque no estoy exportando nada SI EXPORTO SI LO TENGO QUE GUARDAR EN UNA VARIABLE, POR ESO LO PONEMOS COMO GLOBAL
require('./dbConfig') //Así cojo mi bd globalmente, es la conexión


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//¿Cómo se puede modificar la función checkrole para que yo puedao especificar el ROLE al que quiero dar acceso?
