
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import selectedClient from './reducers/selectClientReducer'
import selectedActivity from './reducers/selectActivityReducer'
const store = createStore((
    combineReducers({
        selectedClient, selectedActivity
    }, { state: null }, applyMiddleware(logger()))
))
export default store