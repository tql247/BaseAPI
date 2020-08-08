require('dotenv').config() 
require('module-alias/register');
// require('express-async-errors') 

var express = require('express') 
var Routering = require('./routes/index');
// var path = require('path') 
// var cors = require('cors') 
// var request = require('request') 
// var cookieParser = require('cookie-parser') 
// var logger = require('morgan') 
// var routers = require('./routes/index') 

// const { notfoundapi, errorHandler } = require('@utils/errorHandler') 

const PORT = 5000
// const PORT = process.env.PORT || 5000


var app = express() 
const router = express.Router() 


app.use(express.json()) 
app.use(express.urlencoded({ extended: false })) 
app.use('/', Routering);
// app.use("/public", express.static(__dirname + "/public"))
app.listen(PORT) 

module.exports = app 
