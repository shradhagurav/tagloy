import { combineReducers } from '@reduxjs/toolkit';
import userInfo from './userInfo';

const reducer = combineReducers({
  userInfo: userInfo.reducer
});

export default reducer