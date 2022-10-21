const express = require('express')
const { getRootController } = require('../controllers')
const routerIndex = express.Router()

// rutas de index
routerIndex.get('/', getRootController)

module.exports = routerIndex