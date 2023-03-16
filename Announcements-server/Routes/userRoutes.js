const router = require('express').Router();
// const usermodel = require('../models/usersModel')
// const protect = require('../middlewares/authMiddleware')
const {
    userLogin,
    userSignup
} = require('../controllers/userController')


// router.get('/me',protect,(req,res)=>{
//    const user = req.user
//    console.log(user)
//    res.json({user})
// })


router.post('/login',userLogin);


router.post('/signup',userSignup);


module.exports = router