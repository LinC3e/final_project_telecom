const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const flash = require('connect-flash')

require('dotenv').config()
require('./config/passport')


const { dbConnection } = require('./database/config')
const { routerAuth } = require('./routes/auth')
const { routerDev } = require('./routes/db')
const { routerPost } = require('./routes/posts')



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
app.use(methodOverride('_method'))
app.use(express.static('public/imgs')); 
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({mongoUrl: process.env.DB_LOCAL_URI})
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use((req,res,next) => {
    res.locals.todo_OK = req.flash('todo_OK')
    res.locals.todo_error = req.flash('todo_error')
    next()
})

// Routes
app.use('/', routerDev)// Solo desarrollo
app.use('/', routerPost)
app.use('/', routerAuth)

app.listen(PORT, err => {
    if(err) throw new Error("Ocurrio un problema en el servidor - ",err)
    console.log("Server on in PORT : ", PORT)
})