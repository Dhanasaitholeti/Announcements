import axios from 'axios'
import Cookies from 'js-cookie'

export const getAnnouncementsReq = () => {
    const Token = Cookies.get('jwtToken')
    return axios.request({
        method: 'GET',
        url:'https://dhindora-krjl.onrender.com/announcements/',
        headers: {
            Authorization: `Bearer ${Token}`
        }
    })
}

export const postNewAnnouncement = (action) => {
    const token = Cookies.get('jwtToken')
    return axios.request({
        method:'POST',
        url:'https://dhindora-krjl.onrender.com/announcements/Add-Announcement',
        data:action.postData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}


export const removeAnnoucement = (action) =>{
    const token = Cookies.get('jwtToken')
    const id = action.id
    console.log(id)
    return axios.request({
        method:'DELETE',
        url:`https://dhindora-krjl.onrender.com/announcements/del-Announcement/${id}`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

export const showAnnoucementRequest = (action) => {
    const token = Cookies.get('jwtToken')
    const id = action.id
    return axios.request({
        method:'GET',
        url:`https://dhindora-krjl.onrender.com/announcements/getAnnouncement/${id}`,
        headers:{
            Authorization:`Bearer ${token}`
        }

    })
}


export const updateAnnouncementReq = (action) => {
    const token  = Cookies.get('jwtToken')
    const id = action.data.id
    return axios.request({
        method:"PATCH",
        data:action.data.editData,
        url:`https://dhindora-krjl.onrender.com/announcements/update-Announcement/${id}`,
        headers:{
            Authorization:`Bearer ${token}`
        }       
    })
}