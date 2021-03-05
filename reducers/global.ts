import type { GlobalActions, GlobalState } from 'types/global';
import { ActionTypes } from 'types/global';

const initialState: GlobalState = {
  error: '',
};

const RoomsReducer = (state = initialState, action: GlobalActions): GlobalState => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.SET_ERROR:
    return { ...state, error: payload };
  default:
    return state;
  }
};

export default RoomsReducer;
