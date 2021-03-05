import { combineReducers } from 'redux';
import RoomsReducer from './rooms';

const rootReducer = combineReducers({
  rooms: RoomsReducer,
});

export default rootReducer;
