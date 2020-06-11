import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import {logger} from 'redux-logger'

const customizedMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: true
  },
  serializableCheck: {
    serializableCheck: false
    }
})
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
  },
  middleware:[...customizedMiddleware,logger]
});
