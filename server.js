const express = require('express')
const { engine } = require('express-handlebars')
const { dbConnection } = require('./database/config')
const routerIndex = require('./routes')
const { routerDev } = require('./routes/db')
const { routerPost } = require('./routes/posts')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT

// Connect to DB
dbConnection()

// Template Engine
app.engine('hbs', engine({ extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')


// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/', routerIndex)
app.use('/', routerDev)// Solo desarrollo
app.use('/', routerPost)

app.listen(PORT, err => {
    if(err) throw new Error("Ocurrio un problema en el servidor - ",err)
    console.log("Server on in PORT : ", PORT)
})