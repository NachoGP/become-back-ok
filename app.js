var createError = require('http-errors');
var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
//añado esta linea
const exphbs = require ('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let apiRouter = require('./routes/api');

app.use(cors())

var app = express();

const corsOptions ={
  method: ['POST', 'GET', 'SET'],
  origin:'*',
  optionsSuccessStatus: 200
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs', 
  partialDir: __dirname + '/views/partials'

}))


app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cors(corsOptions), indexRouter);
app.use('/users', cors(corsOptions) , usersRouter);
app.use ('/api', cors(corsOptions), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
