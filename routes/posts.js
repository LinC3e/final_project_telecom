const express = require('express')
const routerPost = express.Router()
const { getPosts, showPost } = require('../controllers/posts')

// ruta index
routerPost.get('/posts',getPosts )
routerPost.get('/posts/:slug', showPost)


module.exports = {
    routerPost
}