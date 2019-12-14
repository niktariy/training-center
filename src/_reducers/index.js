import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import coursesReducer from './courses.reducer';
import userReducer from './user.reducer';
import lessonReducer from './lessons.reducer';

const rootReducer = combineReducers({
  authReducer,
  coursesReducer,
  userReducer,
  lessonReducer,
});

export default rootReducer;
