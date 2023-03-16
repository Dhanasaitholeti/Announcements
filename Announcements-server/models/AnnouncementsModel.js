const mongoose = require('mongoose');
const usermodel = require('../models/usersModel')
const schema = mongoose.Schema;

const AnnouncementSchema = schema({
    subject: {
        type: String,
        required: true
    },
    Description:{
        type:String,
        required: true
    },
    Written_by:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:usermodel,
        default:null
    }
},
{
    collection:"Announcements"
})

const Announcementmodel = mongoose.model('Announcements',AnnouncementSchema)

module.exports  = Announcementmodel;