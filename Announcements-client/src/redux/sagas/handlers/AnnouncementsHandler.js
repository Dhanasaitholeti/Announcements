import {call,put} from 'redux-saga/effects'
import { setAnnouncemnt, setIndAnnouncement } from '../../ducks/AnnouncementReducer'
import { getAnnouncementsReq , postNewAnnouncement , removeAnnoucement , showAnnoucementRequest, updateAnnouncementReq} from '../requests/AnnouncementRequests'
import { toast } from 'react-toastify'


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
        yield call(() => postNewAnnouncement(action))
        toast.success("Document created succesfully");
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
    console.log(action.data)
    try {
        yield call(()=>updateAnnouncementReq(action))
    } catch (error) {
        console.log(error)
    }
}

export function* showAnnouncementHandle(action) {
    try {
        const res = yield call(()=>showAnnoucementRequest(action))
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