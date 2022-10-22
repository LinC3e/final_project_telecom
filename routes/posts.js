const express = require('express')
const routerPost = express.Router()
const { getPosts } = require('../controllers/posts')

// ruta index
routerPost.get('/posts',getPosts )


module.exports = {
    routerPost
}