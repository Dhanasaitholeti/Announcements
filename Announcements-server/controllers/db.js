const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/Announcements";
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