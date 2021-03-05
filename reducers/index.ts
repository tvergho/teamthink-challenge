import { combineReducers } from 'redux';
import RoomsReducer from './rooms';
import GlobalReducer from './global';

const rootReducer = combineReducers({
  rooms: RoomsReducer,
  global: GlobalReducer,
});

export default rootReducer;
