const mongoose  = require('mongoose')
const schema = mongoose.Schema;
const userSchema = new schema({

    Name:{
        type:String,
        required:true
    },
    Email:{
        type: String,
        required: true,
        lowercase:true,
        unique:true
    },
    passwd:{
        type: String,
        required: true
    },
    Phone_Num:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required: true
    },
    POR:{
        type: String,
        default:"Student"
    },
    Admin:{
        type:Boolean,
        default:false
    }
},
{
    collection:"users"
}
)

const usermodel = mongoose.model("users",userSchema)

module.exports = usermodel;