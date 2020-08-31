require('module-alias/register')
require('dotenv').config()
require('express-async-errors')

var express = require('express')
var Routering = require('./routes/index')
var path = require('path') 
// var cors = require('cors') #2
// var cookieParser = require('cookie-parser') #3
// var logger = require('morgan') #4
const { notfoundapi, errorHandler } = require('@utils/errorHandler')

// const PORT = 4000
const PORT = process.env.PORT || 5000

var app = express()
const router = express.Router()

app.use("/public", express.static(path.join(__dirname, '/public')))
// app.use(cors())  #2
// app.use(cookieParser())  #3
// app.use(logger('dev'))  #4
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', Routering)
app.use([notfoundapi, errorHandler])

app.listen(PORT)

module.exports = app
