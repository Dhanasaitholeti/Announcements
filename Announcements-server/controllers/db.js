const mongoose = require('mongoose');
const uri = "mongodb+srv://saribaby1999:q4rlTFLBhX4MDobS@cluster0.9fj1a.mongodb.net/Dhindora?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);

const connecttodb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Database")      
    } catch (error) {
        console.log("Error connecting to Database")
        console.log(error.message)
    }   
}

module.exports = connecttodb;   