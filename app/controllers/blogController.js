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

router.put('/' , authenticateUser, (req,res)=>{
    const body = req.body
    blog.findOneAndUpdate()
})

module.exports = router