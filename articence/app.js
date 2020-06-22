var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/main');
var app = express();
var session = require('express-session');
const cors = require("cors");


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'app_server', 'views'));


app.use(express.static(__dirname + '/public')); 
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); /* To handle Cross origin error  */



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); ;
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true
  }));
module.exports = app;
app.use('/',index)
console.log("port:3001");
app.listen(3001);
