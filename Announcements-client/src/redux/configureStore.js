import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcherSaga from "./sagas/rootSaga";
import userReducer from "./ducks/userLoginReducer";
import announcementReducer from "./ducks/AnnouncementReducer";
import userDataReducer from "./ducks/UserDataReducer";

const reducers = combineReducers({
  userData: userDataReducer,
  user: userReducer,
  announcements: announcementReducer,
});
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootWatcherSaga);

export default store;
