import { combineReducers } from 'redux';
import RoomsReducer from './rooms';
import GlobalReducer from './global';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  rooms: RoomsReducer,
  global: GlobalReducer,
  auth: AuthReducer,
});

export default rootReducer;
