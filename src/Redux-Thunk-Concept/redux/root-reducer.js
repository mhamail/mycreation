import apiReducer from "./fakeapi/apireducer";
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    apiReducer
})

export default rootReducer