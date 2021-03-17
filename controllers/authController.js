const {loginValid,signValid} =require('../Middlewares/authMiddlewares')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.login= async (req,res)=>{
    try{
        const {error} =loginValid(req.body)
        console.log(error)
        if(error)
            res.status(401).send({message:"Invalid Credentials"})
        const user=await User.findOne({email:req.body.email})
        if(!user)return res.status(400).send({message:"Invalid Credentials"})
        console.log(user)
        const validpass = await bcrypt.compare(req.body.password,user.password)
        if(!validpass) return res.status(400).send({message:'Invalid Credentials'})
    
        const token =jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn:"43200s"})
        const rtoken =jwt.sign({_id:user._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
            //req.setHeader('Access-Control-Allow-Origin',`*`);
        //console.log(token)
        res.cookie('token',token,{
            maxAge: 2629800000,
            httpOnly:true
        })
        res.cookie('rtoken',rtoken,{
            maxAge: 2629800000,
            httpOnly:true
        })
        res.send({...user,password:"",message:"successful"})
            
        }catch(err){
            console.log(err)
        }
}
module.exports.signup=async (req,res)=>{
    try{
        const {error} = signValid(req.body)
        if(error)
            res.status(400).send({message:error.message})
            
        const emailCheck= await User.findOne({email:req.body.email})
        if(emailCheck)return res.status(400).send({message:"email already exists"}) 

        const salt =await bcrypt.genSalt(10)
        const hashpassword= await bcrypt.hash(req.body.password,salt)

        const user = new User({...req.body,password:hashpassword})
        try{   
            const saved=await user.save()
            res.send({message:"Successfuly registered"})
        }
        catch(err){
            res.status(400).send({message:err})
        }
    }catch(err){
        console.log(err)
    }
}

module.exports.refresh= async (req,res)=>{
    
    const token =jwt.sign({_id:req.user.id},process.env.TOKEN_SECRET,{expiresIn:"43200s"})
    const rtoken =jwt.sign({_id:req.user.id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
    res.cookie('token',token,{
        maxAge: 2629800000,
        httpOnly:true
    })
    res.cookie('rtoken',rtoken,{
       maxAge: 2629800000,
       httpOnly:true
   })
        //req.setHeader('Access-Control-Allow-Origin',`*`);
    res.status(200).send({message:"Successful"})
}
module.exports.dashboard= async (req,res)=>{
    const id = req.user.id || ""
    const user= await User.findById({_id:id})
    if(!user)
        return res.status(400).send({message:"User Not Found"})
    //console.log(user)
    return res.json({...user,password:""})    
}

module.exports.logout=(req,res)=>{
    res.clearCookie('token')
    res.clearCookie('rtoken')
    res.send({message:'Loged out'});
}