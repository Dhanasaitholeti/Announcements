const SET_USER_DATA = 'SET_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';


export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
})

export const getUserData = () => ({
    type: GET_USER_DATA
})

const initialState = {
    userData:undefined,
    errstate:false,
    loadingstate:true
}

const Main_Reducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                userData:action.userData.user,
                errstate:action.userData.errstate,
                loadingstate:action.userData.loadingstate
            })    

        default:
            return state
    }

}


export default Main_Reducer