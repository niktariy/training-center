import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import coursesReducer from './courses.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  authReducer,
  coursesReducer,
  userReducer,
});

export default rootReducer;
