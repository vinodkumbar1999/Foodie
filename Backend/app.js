const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000


// require database models
const user = require('./models/user')
const Post = require('./models/post')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//cross origin resource sharing
app.use(cors())

const dbURL = "mongodb://localhost:27017/foodies"
mongoose.connect(dbURL).then(() => {
    console.log("database connected");
})


app.post('/login' ,(req, res)=>{
    user.findOne({ email:req.body.email },(err, userData)=>{
        if (userData) {
            if (req.body.password == userData.password) {
                res.send({message:'Login successfull'})
            } 
            else {
                res.send({message:'Login failed'})
            }
        } 
        else {
            res.send({message:'No account seems to be watching with your email address'})
        }
    })
})

app.post('/signup', async (req, res) => {
    user.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            res.send({ message: "Seems like you already have an account with this enterd email" })
        }
        else {
            const data = new user({
                username: req.body.username,
                phoneNo: req.body.phoneNo,
                email: req.body.email,
                password: req.body.password
            })
            data.save(() => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "User resister Sucesfully" })
                }
            })
        }
    })
})

app.post('/add-post', async(req, res)=>{
    let dataPost = new Post({
        author: req.body.author,
        posttitle: req.body.posttitle,
        summary: req.body.summary,
        image: req.body.image,
        location: req.body.location
    })
    try {
        await dataPost.save()
        res.send({message:'Post added succesfully'})
    } catch (err) {
        res.send({message:'Failed to add post'})
    }
})

app.get('/post', async(req, res)=>{
    try {
       const posts = await Post.find()
       res.json(posts)
    } catch (error) {
        console.log(error);
    }
})
app.get('/post/:id', async(req, res)=>{
    const {id} = req.params
    try {
        const singlePost = await Post.findById(id)
        res.send(singlePost)
    } 
    catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listining on port ${PORT}`);
})