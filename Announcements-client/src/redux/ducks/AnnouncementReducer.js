export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS'
const SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS'
export const POST_ANNOUNCEMENT = "POST_ANNOUNCEMENT"
const RequestState = "REQUEST_STATE"

export const getAnnouncemnt = () => ({
    type:GET_ANNOUNCEMENTS
})

export const setAnnouncemnt = (userData) => ({
    type:SET_ANNOUNCEMENTS,
    userData
})

export const postAnnouncement = (postData) => ({
    type:POST_ANNOUNCEMENT,
    postData
})



const initialState = {
    Data:undefined,
    errstate:false,
    loadingstate:true,
}

const Main_Reducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_ANNOUNCEMENTS:
            return ({
                ...state ,
                Data:action.userData.Data,
                errstate:action.userData.errstate,
                loadingstate:action.userData.loadingstate
            })
        default:
            return state
    }
}


export default Main_Reducer;