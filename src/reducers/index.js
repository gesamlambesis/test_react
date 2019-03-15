import { combineReducers } from 'redux'
import cuidadoresReducer from './cuidadoresReducer'

export default combineReducers({cuidadores: cuidadoresReducer})