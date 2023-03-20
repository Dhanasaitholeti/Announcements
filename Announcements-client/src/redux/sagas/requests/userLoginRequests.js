import axios from 'axios';

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