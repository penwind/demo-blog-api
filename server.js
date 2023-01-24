const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')

// Other modules.
const { config } = require('./config')

// Setting up the express app 💫
const app = express()

// Setting up the middlewares 🛠
app.use(logger('dev'))
app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// Setting up the routes 🚀
app.use('/demo/blog-api/v1', require('./routes'))

// Setting up static files 📁
app.use(express.static('public'))

// Using passport middleware 🎫
app.use(passport.initialize())

// Database connection 🗄
// TODO: Implement database connection.

// Setting the port.
app.set('port', config.port)

// Listening our API.
app.listen(config.port, () => console.log(`[${config.org}] Server is running on port ${config.port} 🐧`))