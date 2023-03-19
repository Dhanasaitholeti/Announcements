import {all,takeLatest} from "redux-saga/effects"

import { GET_USER } from "../ducks/userReducer"
import { userHandler } from "./handlers/userHandler"
 
function* userWatcherSaga(){
    yield takeLatest(GET_USER , userHandler )
}

export default function* rootWatcherSaga(){
    yield all([
        userWatcherSaga()
    ])
}


