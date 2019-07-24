const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const port = 3006

const userRouter = require('./app/controllers/userController')
const blogRouter = require('./app/controllers/blogController')




app.use('/users', userRouter)
app.use('/blog', blogRouter)



app.listen(port, ()=>{
    console.log('listening to port', port)
})



