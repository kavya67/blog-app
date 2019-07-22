const mongoose = require('mongoose')
const path = `mongodb://localhost:27017/blog-app`
mongoose.Promise = global.Promise

mongoose.connect(path,{useNewUrlParser: true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose