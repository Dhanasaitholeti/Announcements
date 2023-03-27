import axios from 'axios'
import Cookies from 'js-cookie'

export const getAnnouncementsReq = () => {
    const Token = Cookies.get('jwtToken')
    return axios.request({
        method: 'GET',
        url:'http://localhost:8080/announcements/',
        headers: {
            Authorization: `Bearer ${Token}`
        }
    })
}

export const postNewAnnouncement = (action) => {
    console.log("here in request")
    const token = Cookies.get('jwtToken')
    return axios.request({
        method:'POST',
        url:'http://localhost:8080/announcements/Add-Announcement',
        data:action.postData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}