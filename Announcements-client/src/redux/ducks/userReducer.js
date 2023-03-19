//action names
export const GET_USER = "get_User"
const SET_USER = "set_User"


//action handlers
export const getUser = (data)=> ({
    type:GET_USER,
    data
})

export const setUser = (userData) => ({
    type:SET_USER,
    userData
})



//initial state here
const initialState = {
    user:undefined
}

//Mainreducer
const Main_Reducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER:
            return {...state,user:action.userData}
        default:
            return state;
    }
}



export default Main_Reducer;