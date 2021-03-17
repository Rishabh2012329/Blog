const Blog=require('../models/Blog')


module.exports.getAllBlog=async (req,res)=>{
    
        const blogs = await Blog.find({})
        if(blogs.length==0)
            return res.status(400).send({message:"NO Blogs Yet"}) 
        res.send(blogs)
    
}
module.exports.postBlog=(req,res)=>{
    const blog=new Blog({...req.body})
        blog.save((err,blog)=>{
            if(err){
                console.log(err)
                res.status(400).send({message:err.message})
            }else{
                res.send("Successful")
            }
        })
   
   
}    
module.exports.updateBlog=async (req,res)=>{
    try{
        if(!req.body._id)
            return res.status(400).send({message:"wrong blog!"})
        const blog=await Blog.findOne({_id:req.body._id})
        blog.Info=req.body.Info
        blog.Date=req.body.Date
        blog.title=req.body.title
        blog.imgLink=req.body.imgLink
        blog.save()
    }catch(error){
        return res.status(400).send({message:error.message})
    }
}
module.exports.deleteBlog=async (req,res)=>{
    if(!req.body._id)
        return res.status(400).send({message:"wrong blog!"})
        const result = await Blog.deleteOne({name:req.body.name})
        //console.log(result)
      if(result.deletedCount==0)
            return res.status(400).send("Blog does not exists!")
       res.send({
           message:"Successful"
       })
}