const Announcementmodel = require('../models/AnnouncementsModel')



const getAnnouncements =async (req,res) => {
    try {
        const data = await Announcementmodel.find({})
        res.status(200).json({ data })

    } catch (error) {
        console.log(error)
    }
}

const AddAnnouncement = async (req,res) => {
    const {subject,description} = req.body;
    try {
        const data = await Announcementmodel.create({
             subject,
             Description: description,
             Written_by:req.user.id
        })
        res.status(200).json({ data })

    } catch (error) {
        console.log(error)
    }
}

const deleteAnnouncement = async (req,res) => {
    const id = req.params.id
    try {
        const deldata = await Announcementmodel.findByIdAndDelete(id)
        console.log(deldata)

        res.status(201).json({"message":"Announcement deleted successfully"})
    } catch (error) {
        console.log(error)
    }
}

const updateAnnouncement = async (req,res) => {
    const id = req.params.id
    const {subject,description} = req.body
    try {
        const updated_data = await Announcementmodel.findByIdAndUpdate(id,{subject:subject,Description:description})
        console.log(updated_data)

        res.status(201).json({"message":"Data updated successfully"})
    } catch (error) {
        console.log(error);
    }
    
}


module.exports  = {
    getAnnouncements,
    AddAnnouncement,
    deleteAnnouncement,
    updateAnnouncement
}