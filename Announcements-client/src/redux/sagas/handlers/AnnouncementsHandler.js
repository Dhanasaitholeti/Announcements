import {call,put} from 'redux-saga/effects'
import { setAnnouncemnt } from '../../ducks/AnnouncementReducer'
import { getAnnouncementsReq } from '../requests/AnnouncementRequests'

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