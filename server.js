const express = require('express')
const app = express()
const dotenv=require('dotenv')
const mongoose = require('mongoose')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const blogRoute=require('./routes/blog')
const cors = require('cors')
const prod='http://localhost:3000'
const durl="https://rishabh2012329.github.io"
app.use(cors({
    credentials:true,
    origin:durl
}))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded())
dotenv.config()

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected")
})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/auth',authRoute)
app.use('/blog',blogRoute)
app.listen(process.env.PORT||5000,()=>{
    console.log("listening")
})