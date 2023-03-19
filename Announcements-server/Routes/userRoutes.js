const router = require('express').Router();
const protect = require('../middlewares/authMiddleware')
const {
    userLogin,
    userSignup,
    userMe,
    userUpdate
} = require('../controllers/userController')


router.get('/me',protect,userMe)

router.put('/updateme',protect,userUpdate)

router.post('/login',userLogin);

router.post('/signup',userSignup);


module.exports = router