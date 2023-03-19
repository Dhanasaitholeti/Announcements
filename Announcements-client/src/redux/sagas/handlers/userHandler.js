import Cookies from 'js-cookie';
import {call,put} from 'redux-saga/effects'
import {  } from '../../ducks/userReducer';
import {userLogin} from '../requests/userRequests'

export function* userHandler(action){
    try {
        const res = yield call( () => userLogin(action) );
        console.log(res.data)
        Cookies.set('jwtToken',res.data.token);
        // yield put(setUser(res.data));

    } catch (error) {
        console.log("try to signup first")
    }
}