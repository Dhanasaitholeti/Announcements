import Cookies from "js-cookie";
import { call, put } from "redux-saga/effects";
import { setUserData } from "../../ducks/userdataReducer";
import { setUser } from "../../ducks/userLoginReducer";
import {
  userDatareq,
  userLogin,
  userSignup,
} from "../requests/userLoginRequests";
import { toast } from "react-toastify";

export function* userLoginHandler(action) {
  try {
    yield put(setUser({ loggedIn: false, err: false, loading: true }));
    const res = yield call(() => userLogin(action));
    Cookies.set("jwtToken", res.data.Token);
    yield put(setUser({ loggedIn: true, err: false, loading: false }));
    toast.success("login success");
  } catch (error) {
    toast.error("Check your Credentials!");
    yield put(setUser({ loggedIn: false, err: true, loading: false }));
  }
}

export function* userSignupHandler(action) {
  try {
    yield call(() => userSignup(action));
    toast.success("new user created!");
  } catch (error) {
    toast.error("failed to create new user");
    console.log(error.message);
  }
}

export function* getUserMe() {
  try {
    const userRes = yield call(() => userDatareq());
    yield put(
      setUserData({
        user: userRes.data.data,
        errstate: false,
        loadingstate: false,
      })
    );
  } catch (error) {
    yield put(
      setUserData({
        user: undefined,
        errstate: true,
        loadingstate: false,
      })
    );
  }
}
