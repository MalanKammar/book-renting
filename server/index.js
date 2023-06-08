const express=require('express')
require('dotenv').config()
const cookieParser=require('cookie-parser')
const cors=require('cors')
const PORT=process.env.PORT
const connect=require('./db/connect')

const app=express()

//body parser setting
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//middleware
app.use(cors())  //cros origin Resource sharing to allow incoming request
app.use(cookieParser(process.env.SECRET_TOKEN)) //configure secured cookies

//index route
app.use(`/api/auth`,require('./route/authRoute'))
app.use(`/api/category`,require('./route/categoryRoute'))
app.use(`/api/book`,require('./route/bookRoute'))
app.use(`/api/rent`,require('./route/rentRoute'))



// default the server 
app.all(`**`,async(req,res)=>{
    return res.status(404).json({msg:'Requested path not found'})
})

app.listen(PORT,async()=>{
    console.log(`server started @ http://localhost:${PORT}`)
    await connect()
})