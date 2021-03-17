const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Info:{
        type:String,
        required:true
    },
    imgLink:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('blog',blogSchema)