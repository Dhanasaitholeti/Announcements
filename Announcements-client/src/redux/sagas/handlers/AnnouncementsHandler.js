import {call,put} from 'redux-saga/effects'
import { setAnnouncemnt, setIndAnnouncement } from '../../ducks/AnnouncementReducer'
import { getAnnouncementsReq , postNewAnnouncement , removeAnnoucement , showAnnoucementRequest, updateAnnouncementReq} from '../requests/AnnouncementRequests'

export function* getAnnouncementsHandle(){
    try {
        const res = yield call(getAnnouncementsReq)
        yield put(setAnnouncemnt({
            Data:res.data.data,
            errstate:false,
            loadingstate:false
        }))
    } catch (error) {
        yield put(setAnnouncemnt({
            Data:undefined,
            errstate:true,
            loadingstate:false
        }))
    }
}

export function* postAnnouncementHandle(action) {
    try {
        const data = yield call(() => postNewAnnouncement(action))
    } catch (error) {
        console.log(error)
    }
}

export function* removeAnnouncementHandle(action) {
    try {
        const data = yield call(() => removeAnnoucement(action))
    } catch (error) {
        console.log(error)
    }
}


export function* updateAnnoucementHandle(action) {
    try {
        const data = yield call(()=>updateAnnouncementReq(action))
        
    } catch (error) {
        console.log(error)
    }
}

export function* showAnnouncementHandle(action) {
    try {
        const res = yield call(()=>showAnnoucementRequest(action))
        console.log(res)
        yield put(setIndAnnouncement({
            Data:res.data.data,
            errstate:false,
            loadingstate:false
        }))
    } catch (error) {
        yield put(setIndAnnouncement({
            Data:undefined,
            errstate:true,
            loadingstate:false
        }))
    }
}