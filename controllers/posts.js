const Post = require('../models/posts')

// Mostrar post en cards

const traerPostCard = async (req,res) => {
    try {
        
        const posts = await Post.find({}).lean()// Me deja un obj puro de js
        console.log(posts)

        const title = "Home"

        res.status(200).render('home',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

// Index
const getPosts = async (req,res) => {
    try {
        // Post.find({user.req.id}).lean() filtra post solo del usuario
        const posts = await Post.find({}).lean()// Me deja un obj puro de js
        console.log(posts)

        const title = "Listado de Post"

        res.status(200).render('index',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

// New 

const newPost = (req,res) => {
    res.render('new')
}


// Create 

const createPost = async (req,res) => {

    try {
        console.log(req.body)

        let post = new Post()

        post.title = req.body.title
        post.body = req.body.body
        post.user = req.user.id

        post = await post.save()
        res.redirect(`/posts/${post.slug}`)
    } catch (error) {
        console.log("Error create", error)
    }
}


// Show 

const showPost = async (req,res) => {
    try {
        const post = await Post.findOne({ slug : req.params.slug }).lean()
        if(post === null) res.redirect('/')

        res.render('show', {
            title: `Post | ${post.title}`,
            post
        })
    } catch (error) {
        console.log("Error Show",error)
    }
}

// Edit

const showFormEditPost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id).lean()

        res.render('edit', {
            title: 'Editando Post',
            post
        })
    } catch (error) {
        console.log("Show edit erro", error)
    }
}

// DELETE 

const deletePost = async (req,res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)

        res.redirect('/posts')
    } catch (error) {
        console.log("Error delete",error)
    }
}


module.exports = { 
    traerPostCard,
    getPosts,  // get
    newPost,  // get
    createPost, // post
    showPost,  // get
    showFormEditPost, // get
    deletePost // delete
}