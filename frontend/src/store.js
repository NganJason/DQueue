import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

// import { authReducers, authState } from './modules/auth/store'

const rootReducer = combineReducers({
  // auth: authReducers
})

const initialState = {
  // auth: authState
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store

