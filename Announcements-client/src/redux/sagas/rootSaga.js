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
import { GET_ANNOUNCEMENTS, POST_ANNOUNCEMENT } from "../ducks/AnnouncementReducer"
import { getAnnouncementsHandle, postAnnouncementHandle } from "./handlers/AnnouncementsHandler"

function* getAnnouncementWatcherSaga(){
    yield takeLatest(GET_ANNOUNCEMENTS , getAnnouncementsHandle)
}
function* postNewAnnouncementWatcherSaga(){
    yield takeLatest(POST_ANNOUNCEMENT , postAnnouncementHandle)
}

//announcent part ends here

export default function* rootWatcherSaga(){
    yield all([
        userWatcherSaga(),
        userSignupWatcherSaga(),
        getUserDatawatchersaga(),
        getAnnouncementWatcherSaga(),
        postNewAnnouncementWatcherSaga()
    ])
}