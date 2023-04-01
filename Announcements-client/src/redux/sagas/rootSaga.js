import {all,takeLatest} from "redux-saga/effects"

//userlogin part starts here
import { CREATE_USER, GET_USER } from "../ducks/userLoginReducer"
import { getUserMe , userLoginHandler , userSignupHandler } from "./handlers/userLoginHandler"
import { GET_USER_DATA } from "../ducks/userdataReducer"


function* userWatcherSaga(){
    yield takeLatest(GET_USER , userLoginHandler)
}
function* userSignupWatcherSaga(){
    yield takeLatest(CREATE_USER , userSignupHandler)
}
function* getUserDatawatchersaga(){
    yield takeLatest(GET_USER_DATA , getUserMe)
}
//userLogin part ends here


//announcement part starts here
import { DELETE_ANNOUNCEMENT, GET_ANNOUNCEMENTS, POST_ANNOUNCEMENT, SHOW_ANNOUNCEMENT } from "../ducks/AnnouncementReducer"
import { getAnnouncementsHandle, postAnnouncementHandle, removeAnnouncementHandle ,showAnnouncementHandle} from "./handlers/AnnouncementsHandler"

function* getAnnouncementWatcherSaga(){
    yield takeLatest(GET_ANNOUNCEMENTS , getAnnouncementsHandle)
}
function* postNewAnnouncementWatcherSaga(){
    yield takeLatest(POST_ANNOUNCEMENT , postAnnouncementHandle)
}

function* removeAnnouncementWatcherSaga(){
    yield takeLatest(DELETE_ANNOUNCEMENT , removeAnnouncementHandle)
}

function* showAnnouncementWatcherSaga(){
    yield takeLatest(SHOW_ANNOUNCEMENT , showAnnouncementHandle )
} 
//announcent part ends here

export default function* rootWatcherSaga(){
    yield all([
        userWatcherSaga(),
        userSignupWatcherSaga(),
        getUserDatawatchersaga(),
        getAnnouncementWatcherSaga(),
        showAnnouncementWatcherSaga(),
        removeAnnouncementWatcherSaga(),
        postNewAnnouncementWatcherSaga(),
    ])
}