const express= require("express")
const router = express.Router()
const {getAllBlog,postBlog,updateBlog,deleteBlog} = require('../controllers/blogController')

router.get('/getAllBlog',getAllBlog)
router.post('/postBlog',postBlog)
router.post('/updateBlog',updateBlog)
router.post('/deleteBlog',deleteBlog)

module.exports = router