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
        post.avatar = "https://ceslava.s3-accelerate.amazonaws.com/2016/04/rZoltXj1-mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png"

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

// my posts 
const myPosts = async (req, res) => {
    try {
        const posts = await Post.find({user: req.user.name}).lean()
        const title = "My/posts"
        res.status(200).render('myposts',
            {
                title,
                posts: posts
            }
        )
    } catch (error) {
        console.log(error)
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

const editPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (post.user == null || post.user === req.user.name) {
            post.title = req.body.title;
            post.body = req.body.body;

            post = await post.save();
            res.status(200).redirect(`/posts/${post.slug}`);
        }
        else {
            res.status(400).redirect('/posts');
        }
    } catch (error) {
        console.log('Edit ERORR', error)
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
    myPosts,
    showFormEditPost, // get
    editPost,
    deletePost // delete
}