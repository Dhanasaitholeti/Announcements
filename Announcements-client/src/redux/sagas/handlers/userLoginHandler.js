import Cookies from 'js-cookie';
import {call,put} from 'redux-saga/effects'
import { setUser } from '../../ducks/userLoginReducer';
import {userLogin , userSignup} from '../requests/userLoginRequests'

export function* userLoginHandler(action){
    // console.log(action.postdata);
    try {
        const res = yield call( () => userLogin(action));
        yield put(setUser({loggedIn:true,err:false}))
        Cookies.set('jwtToken',res.data.Token);
        
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
