import {combineReducers} from 'redux'
import {dashboardReducer} from './dashboardReducer'

const config = {
    dashboardReducer : dashboardReducer
}

const appReducer  = combineReducers(config);

export default appReducer;