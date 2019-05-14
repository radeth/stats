
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import selectedClient from './reducers/selectClientReducer'
import selectedActivity from './reducers/selectActivityReducer'
import selectedAccuracy from './reducers/selectAccuracyReducer'
import selectedRange from './reducers/selectRangeReducer'
import clientsList from './reducers/clientsListReducer'
const store = createStore((
    combineReducers({
        selectedClient, selectedActivity, selectedAccuracy, selectedRange, clientsList
    }, { state: null }, applyMiddleware(logger()))
))
export default store