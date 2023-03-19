import axios from 'axios';

// export const  userRequest = () => {
//     return axios.request({
//         method: 'GET',
//         url:'https://jsonplaceholder.typicode.com/users/1'
//     })
// }

export const userLogin = (action) => {
    // console.log(action.data)
    return axios.request({
        method: 'POST',
        url:'http://localhost:8080/user/login',
        data:action.data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}