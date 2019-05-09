
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import selectedClient from './reducers/selectClientReducer'
import selectedActivity from './reducers/selectActivityReducer'
import selectedAccuracy from './reducers/selectAccuracyReducer'
const store = createStore((
    combineReducers({
        selectedClient, selectedActivity, selectedAccuracy
    }, { state: null }, applyMiddleware(logger()))
))
export default store