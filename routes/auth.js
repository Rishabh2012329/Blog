const express= require("express")
const router = express.Router()
const {login,signup,refresh,dashboard,logout}= require('../controllers/authController')
const {verifyRefresh,verifyToken} = require('../Middlewares/authMiddlewares')

router.post('/login',login)
router.post('/signup',signup)
router.get('/refresh',verifyRefresh,refresh)
router.get('/dashbord',verifyToken,dashboard)
router.get('/logout',logout)

module.exports=router