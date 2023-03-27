import Cookies from 'js-cookie';
import {call,put} from 'redux-saga/effects'
import { setUserData } from '../../ducks/userdataReducer';
import { setUser } from '../../ducks/userLoginReducer';
import {userDatareq, userLogin , userSignup} from '../requests/userLoginRequests'

export function* userLoginHandler(action){
    // console.log(action.postdata);
    try {
        const res = yield call( () => userLogin(action));
        Cookies.set('jwtToken',res.data.Token);
        yield put(setUser({loggedIn:true,err:false}))
        
        
    } catch (error) {
        console.log(error.message)
        yield put(setUser({loggedIn:false,err:true}))
    }
}

export function* userSignupHandler(action) {
    try {
        yield call(() => userSignup(action))
    } catch (error) {
        console.log(error.message)
    }
}


export function* getUserMe(){
    try {
        const userRes = yield call( () => userDatareq());
        yield put(setUserData({
            user:userRes.data.data,
            errstate:false,
            loadingstate:false
        }))
    } catch (error) {
        yield put(setUserData({
            user:undefined,
            errstate:true,
            loadingstate:false
        }))
    }

}