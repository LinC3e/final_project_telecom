const express = require('express')
const routerPost = express.Router()
const { getPosts, showPost, deletePost, newPost, createPost, showFormEditPost, traerPostCard, editPost, myPosts } = require('../controllers/posts')
const isAuthenticated = require('../middlewares/isauthenticated')

// ruta index
routerPost.get('/', traerPostCard)
routerPost.get('/posts', isAuthenticated, getPosts )
routerPost.get('/posts/new', isAuthenticated, newPost)
routerPost.get('/posts/edit/:id',isAuthenticated, showFormEditPost)
routerPost.put('/posts/:id', editPost)
routerPost.get('/myposts' , isAuthenticated, myPosts)
routerPost.get('/posts/:slug',isAuthenticated, showPost)
routerPost.post('/posts', isAuthenticated ,createPost)
routerPost.delete('/posts/:id', isAuthenticated ,deletePost)


module.exports = {
    routerPost
}