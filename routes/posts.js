const express = require('express')
const routerPost = express.Router()
const { getPosts, showPost, deletePost, newPost, createPost, showFormEditPost } = require('../controllers/posts')

// ruta index
routerPost.get('/posts',getPosts )
routerPost.get('/posts/new', newPost)
routerPost.get('/posts/edit/:id', showFormEditPost)
routerPost.get('/posts/:slug', showPost)
routerPost.post('/posts', createPost)
routerPost.delete('/posts/:id', deletePost)


module.exports = {
    routerPost
}