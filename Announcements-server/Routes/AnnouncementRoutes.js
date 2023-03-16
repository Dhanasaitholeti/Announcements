const router = require('express').Router();
const protect = require('../middlewares/authMiddleware')
const checkAdmin = require('../middlewares/AdminMiddleware')
const {
    getAnnouncements,
    AddAnnouncement,
    deleteAnnouncement,
    updateAnnouncement
} = require('../controllers/annoucnementController')


router.get('/',protect,getAnnouncements);


router.post('/Add-Announcement',checkAdmin,AddAnnouncement);


router.delete('/del-Announcement/:id',checkAdmin,deleteAnnouncement);


router.patch('/update-Announcement/:id',checkAdmin,updateAnnouncement);





module.exports = router;