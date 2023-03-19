import { combineReducers , createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootWatcherSaga from './sagas/rootSaga'
import userReducer from "./ducks/userReducer"

const reducers = combineReducers({
    user:userReducer
})
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(reducers,{},applyMiddleware(...middlewares));

sagaMiddleware.run(rootWatcherSaga)

export default store;

