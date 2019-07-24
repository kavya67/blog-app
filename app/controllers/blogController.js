const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const authenticateUser = require('../middlewares/authenticateUser')

router.post('/', authenticateUser, (req,res)=>{
    const body = req.body
    const blog = new Blog(body)
    blog.user = req.user._id
    blog.save()
        .then(blog=>res.send(blog))
        .catch(err=>res.send(err))
})

router.get('/list', authenticateUser, (req,res)=>{
    Blog.find()
        .then(blogs=>res.send(blogs))
        .catch(err=>res.send(err))
})

router.get('/', authenticateUser, (req,res)=>{
    Blog.find({
        user: req.user._id
    })
        .then(blogs=>res.send(blogs))
        .catch(err=>res.send(err))
})

router.get('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Blog.findOne({
        _id: id
    })
        .then(blog=>res.send(blog))
        .catch(err=>res.send(err))
})



router.put('/:id' , authenticateUser, (req,res)=>{
    const id = req.params.id
    const body = req.body
    Blog.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, {$set: body}, {new: true})
        .then(blog=>res.send(blog))
        .catch(err=>res.send(err))
})

router.delete('/:id', authenticateUser, (req,res)=>{
    const id = req.params.id
    Blog.findOneAndDelete({
        user: req.user._id,
        _id: id
    })  
        .then(()=>res.send("successfully deleted"))
        .catch((err)=>res.send(err))
})

module.exports = router