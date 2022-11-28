var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');






let FilmModel  = require('./db/filmschema')

var logger = require('morgan');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let homeRouter = require('./routes/homeRouter')
let listRouter = require('./routes/listRouter')


var fakeDb=[{
  id:1,
  name:"111",
  poster:"http://111",
  price:100
},
{
  id:2,
  name:'222',
  poster:"http://222",
  price:200
},
{
  id:3,
  name:'333',
  poster:"http://333",
  price:300
},{
  id:4,
  name:'444',
  poster:"http://444",
  price:400
},
{
  id:5,
  name:'555',
  poster:"http://555",
  price:500
}]



   // getFilmDetail感叹号意思是必须传的参数
var schema = buildSchema(`

type Account{
  name:String,
  age:Int,
  arr:[String]
}

  type Film{
    id:String,
    name:String,
    poster:String,
    price:Int
  }

  input FilmInput{
    id:Int,
    name:String,
    poster:String,
    price:Int
  }

  type Query {
    hello: String,
    getName:String,
    getAge:Int,
    getAllNames:[String],
    getAllAges:[Int],
    getAccountInfo: Account,
    
    getNowPlayingList(id:String!):[Film],
    getFilmDetail(id:Int!):Film
  }

  type Mutation{
    createFilm(input:FilmInput):Film,
    
    updateFilm(id:String!,input:FilmInput):Film,

    deleteFilm(id:String!):Int
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
  },
  getAccountInfo:()=>{
    return {
      name:"chris",
      age:26,
      arr:["asd",'zxc','vbn']
    }
  },
  // getNowPlayingList(){
  //   return FilmModel.find()
  // },
  getNowPlayingList({id}){
    if(!id){
      return FilmModel.find()
    }
    return FilmModel.find({_id:id})
  },
  getFilmDetail({id}){
      console.log(id)
      return fakeDb.filter(item=>item.id===id)[0]
  },


  createFilm({input}){
    return FilmModel.create({
         ...input
     })

  },
  updateFilm({id,input}){

  return FilmModel.updateOne({
      _id:id},{...input})

  
  },

  deleteFilm({id}){
     return FilmModel.deleteOne({_id:id}).then(res=>1)
  }


};

var app = express();



const cors = require('cors');

app.use(cors())

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
