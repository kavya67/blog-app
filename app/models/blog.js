const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/08/143944974601-materialdesign_introduction.png"
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