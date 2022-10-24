const express = require('express')
const routerPost = express.Router()
const { getPosts, showPost, deletePost } = require('../controllers/posts')

// ruta index
routerPost.get('/posts',getPosts )
routerPost.get('/posts/:slug', showPost)
routerPost.delete('/posts/:id', deletePost)


module.exports = {
    routerPost
}