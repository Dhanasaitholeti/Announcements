import axios from 'axios';
import Cookies from 'js-cookie';
export const  userSignup = (action) => {
    
    return axios.request({
        method: 'POST',
        url:"http://localhost:8080/user/signup",
        data:action.postdata,
        headers: {
            "Content-Type":"application/json",
        }
    })
}

export const userLogin = (action) => {
    return axios.request({
        method: 'POST',
        url:'http://localhost:8080/user/login',
        data:action.postdata,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const userDatareq = () => {
    const Token = Cookies.get('jwtToken')
    return axios.request({
        method:"GET",
        url:'http://localhost:8080/user/me',
        headers:{
            Authorization:`Bearer ${Token}`
        }
    })
}