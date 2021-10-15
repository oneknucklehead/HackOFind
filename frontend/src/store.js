import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducers } from './reducers/userListReducers'
import {
  userLoginReducers,
  userRegisterReducers,
} from './reducers/userReducers'
const reducer = combineReducers({
  userList: userListReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
})

const userLoginFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userLoginFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
