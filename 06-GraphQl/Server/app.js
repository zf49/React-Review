var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let homeRouter = require('./routes/homeRouter')
let listRouter = require('./routes/listRouter')





var schema = buildSchema(`
  type Query {
    hello: String,
    getName:String,
    getAge:Int,
    getAllNames:[String],
    getAllAges:[Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!111111';
  },
  getName:()=>{
    return 'chris'
  },
  getAge:()=>{
    return 26
  },
  getAllNames:()=>{
      return ["asd",'123123','zxcsfg','sdfgj']
  },
  getAllAges:()=>{
      return [1,54,345,5467,4678,56,34,234,234,23,42,34]
  }
};

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/home',homeRouter)
app.use('/list',listRouter)


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));




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
