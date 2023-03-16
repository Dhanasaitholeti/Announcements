const GET_USER = "get_User"


export const getUser = (data)=> ({
    type:GET_USER,
    data
})


const initialState = {
    user:undefined
}


const Main_Reducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_USER:
            return {...state,user:action.data}
        default:
            break;
    }
}



export default Main_Reducer;