const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"viewer"
    }
})
module.exports= mongoose.model('user',userSchema)