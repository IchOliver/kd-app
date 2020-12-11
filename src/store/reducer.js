import {combineReducers} from 'redux'
import {authReducer} from './reducers/authReducer'
import {eventReducer} from './reducers/eventReducer'
import {informationReducer} from './reducers/informationReducer'
import {standReducer} from './reducers/standReducer'

export default combineReducers({
    auth:authReducer,
    events:eventReducer,
    informs:informationReducer,
    stands:standReducer
})

