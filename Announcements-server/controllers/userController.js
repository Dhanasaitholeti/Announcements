const bcrypt = require('bcryptjs')
const tokenGenerator = require('../controllers/tokengenerator');
const UserModel = require('../models/usersModel')


const userLogin =async (req,res) => {
    const {Email , passwd} = req.body;
    try {
        const userEmaildata = await UserModel.findOne({Email})

        if(!userEmaildata){
             res.status(404).json({"message":"Please enter the correct "})
        }
        else if(userEmaildata){

            const passwddata = await bcrypt.compare(passwd , userEmaildata.passwd)

            if(!passwddata){
                 res.status(404).json({"message":"enter the correct password"})
            }

            else{

                const jwt_token = await  tokenGenerator({
                id:userEmaildata.id,
                Email:userEmaildata.Email,
                POR:userEmaildata.POR,
                Admin:userEmaildata.Admin
            })

            res.status(200).json({
                "Token":jwt_token
            })
        }

        }   
        
    } catch (error) {
        console.log("error happend")
        console.log(error.message)
    }
    
}


const  userSignup = async (req,res) => {

    const {FullName,Email,passwd,Phone_Num,Gender} = req.body;
    try {      

        const salt = await bcrypt.genSalt(10)

        const passwdHash = await bcrypt.hash(passwd,salt)


        const Emaildata = await UserModel.find({Email})

        if(Emaildata.length > 0 ){ 
            res.status(400).json({"message":"This user already Exist"})
        }
        else{
            const newuser = await UserModel.create({
                Name:FullName,
                Email,
                passwd:passwdHash,
                Phone_Num,
                Gender
            })
            res.status(200).json({
                "message":"User Registered successful",
                "user":newuser
            })
        }
    }
    catch (error) {
        console.log("error happend")
        console.log(error)
    }

}


const userMe = async (req,res) => {
    const id = req.user.id
     try {
        const userData = await UserModel.findById(id).select('-passwd' )
        res.status(201).json({
            message:"success",
            data:userData
        })
     } catch (error) {
        res.status(400).json({
            message:"Not able to fetch"
        })
        console.log(error)
     }
}

const userUpdate = async (req,res) => {
    const id = req.user.id
    const {FullName,Email,Phone_Num,Gender} = req.body;
    console.log(req.body)
    try {
        const dataupdate = await UserModel.findByIdAndUpdate(id,{Name:FullName,Email:Email,Phone_Num:Phone_Num,Gender:Gender})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userLogin,
    userSignup,
    userMe,
    userUpdate
}