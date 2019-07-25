const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(express.json())
app.use(cors())


// const port = 3006
const port = process.env.PORT || 3006

const userRouter = require('./app/controllers/userController')
const blogRouter = require('./app/controllers/blogController')


app.use('/users', userRouter)
app.use('/blog', blogRouter)

app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname + "/client/build/index.html"))
})



app.listen(port, ()=>{
    console.log('listening to port', port)
})



