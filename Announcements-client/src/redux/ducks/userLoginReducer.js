//action names
export const GET_USER = "get_User"
const SET_USER = "set_User"
export const CREATE_USER = "create_User"

//action handlers
export const getUser = (postdata) => ({
    type:GET_USER,
    postdata
})

export const setUser = (userData) => ({
    type:SET_USER,
    userData
})

export const createUser = (postdata) => ({
    type:CREATE_USER,
    postdata
})

//initial state here
const initialState = {
    userLoggedin:false,
    UserError:undefined,
    userLoading:false
}

//Mainreducer
const Main_Reducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, userLoggedin:action.userData.loggedIn, UserError:action.userData.err, userLoading:action.userData.loading}
        default:
            return state;
    }
}



export default Main_Reducer;