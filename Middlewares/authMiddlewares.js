const Joi=require('joi')
const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()


async function signValid(obj){
    const schema=Joi.object({
        email:Joi.string().email().required(),
        name:Joi.string().min(3).required(),
        password:Joi.string().min(5).required(),
        phone:Joi.number().min(10).max(10).required(),
        role:Joi.string().required()
    })
   const result=await schema.validate(obj)
   //console.log(result)
   return result;
}

async function loginValid(obj){
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    })
   const result=await schema.validate(obj)
   return result;
}

const verifyToken = async (req, res, next) => {
  //console.log(req.cookies)
    const token = await req.cookies.token || '';
     //console.log(token)
      var ret;
      if (token==='') {
        return res.status(401).send('You need to Login')
      }
      let decrypt;
      try{
         decrypt = await jwt.verify(token, Buffer.from( process.env.REFRESH_TOKEN_SECRET, 'base64' ))
         console.log(decrypt)
      }
      catch(err){
        console.log(err)
        return res.status(401).send("you need to login")
      }
     
      req.user = {
        id: decrypt._id
        //firstname: decrypt.firstname,
      };
      next();
     
     
    
  }
  const verifyRefresh = async (req, res, next) => {
  
      const rtoken = await req.cookies.rtoken || '';
      //const token = await req.cookies.token || '';
      //console.log(rtoken+"ri")
        if (rtoken==='') {
          return res.status(401).send('You need to Login')
        }
        //const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
        try{
          rsec= await jwt.verify(rtoken, Buffer.from( process.env.REFRESH_TOKEN_SECRET, 'base64' ))
          
        }
        catch(err){
          return res.status(401).send("you need to login")
        }
        
        req.user = {
          id: rsec._id
          //firstname: decrypt.firstname,
        };
        next();
      
    }
module.exports.verifyRefresh = verifyRefresh
module.exports.verifyToken=verifyToken
module.exports.signValid=signValid
module.exports.loginValid=loginValid