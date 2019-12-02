import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import coursesReducer from './courses.reducer';

const rootReducer = combineReducers({
  authReducer,
  coursesReducer,
});

export default rootReducer;
