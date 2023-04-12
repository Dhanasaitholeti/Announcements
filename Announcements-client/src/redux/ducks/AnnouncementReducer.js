export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS'
export const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT"
export const POST_ANNOUNCEMENT = "POST_ANNOUNCEMENT"
export const EDIT_ANNOUNCEMENT = "EDIT_ANNOUNCEMENT"
export const SHOW_ANNOUNCEMENT = "SHOW_ANNOUNCEMENT"
const SET_INDIVIDUAL_ANNOUNCEMENT = "SET_INDIVIDUAL_ANNOUNCEMENT"
const SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS'
const REQUEST_STATE_UPDATE = "REQUEST_STATE"
const RESET_STATE = "RESET_STATE"

export const getAnnouncemnt = () => ({
    type:GET_ANNOUNCEMENTS
})

export const setAnnouncemnt = (userData) => ({
    type:SET_ANNOUNCEMENTS,
    userData
})

export const setIndAnnouncement = (userdata) => ({
    type:SET_INDIVIDUAL_ANNOUNCEMENT,
    userdata
})

export const postAnnouncement = (postData) => ({
    type:POST_ANNOUNCEMENT,
    postData
})

export const deleteAnnoucement = (id) => ({
    type:DELETE_ANNOUNCEMENT,
    id
}) 

export const editAnnouncement = (data) => ({
    type:EDIT_ANNOUNCEMENT,
    data
})

export const requestStateUpdate = (stateData) => ({
    type:REQUEST_STATE_UPDATE,
    stateData
})


export const showAnnouncement = (id) => ({
    type:SHOW_ANNOUNCEMENT,
    id
})

export const resetState = () =>({
    type:RESET_STATE
})

const initialState = {
    indData:undefined,
    inderrState:false,
    indloadingState:true,
    Data:undefined,
    errstate:false,
    loadingstate:true,
    RequestState:undefined
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
        case SET_INDIVIDUAL_ANNOUNCEMENT:
            return({
                ...state,
                indData:action.userdata.Data,
                inderrState:action.userdata.errstate,
                indloadingState:action.userdata.loadingstate
            })
        case REQUEST_STATE_UPDATE:
            return({
                ...state ,
                RequestState:action.stateData
            })
        case RESET_STATE:
            return({
                ...state,
                Data:undefined,
                errstate:false,
                loadingstate:true
            })

        default:
            return state
    }
}


export default Main_Reducer;