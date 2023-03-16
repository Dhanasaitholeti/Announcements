const jwt = require('jsonwebtoken');
const usermodel = require('../models/usersModel');

const checkAdmin = async (req,res,next) => {
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){

        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token , process.env.JWT_KEY)
            if(!decoded.Admin){
             return res.status(403).json({"message":"Access denied"})
            }
            
            req.user = await usermodel.findById(decoded.id).select('-passwd')
            
            
            next()
        }
         catch (error) {
        res.status(400).send("please try to login");
         }
    }
    else{
        res.status(400).send("please try to login");
    }
}

module.exports = checkAdmin