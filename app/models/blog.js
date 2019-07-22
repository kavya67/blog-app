const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog