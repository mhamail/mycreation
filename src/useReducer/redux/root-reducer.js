import todoReducers from "./data/todoReducer";
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    todoReducers
})

export default rootReducer;