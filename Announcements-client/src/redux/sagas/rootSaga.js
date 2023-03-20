import {all,takeLatest} from "redux-saga/effects"

//userlogin part starts here
import { CREATE_USER, GET_USER } from "../ducks/userLoginReducer"
import { userLoginHandler , userSignupHandler } from "./handlers/userLoginHandler"

function* userWatcherSaga(){
    yield takeLatest(GET_USER , userLoginHandler )
}
function* userSignupWatcherSaga(){
    yield takeLatest(CREATE_USER , userSignupHandler)
}
//userLogin part ends here

//announcement part starts here
import { GET_ANNOUNCEMENTS } from "../ducks/AnnouncementReducer"
import { getAnnouncementsHandle } from "./handlers/AnnouncementsHandler"

function* getAnnouncementWatcherSaga(){
    yield takeLatest(GET_ANNOUNCEMENTS , getAnnouncementsHandle)
}

//announcent part ends here
export default function* rootWatcherSaga(){
    yield all([
        userWatcherSaga(),
        userSignupWatcherSaga(),
        getAnnouncementWatcherSaga()
    ])
}


