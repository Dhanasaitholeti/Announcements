import { combineReducers , createStore } from 'redux'

const reducers = combineReducers({
    cout:0
})
const store = createStore(reducers);

export default store;