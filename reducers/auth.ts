import type { AuthActions, AuthState, User } from 'types/auth';
import { ActionTypes } from 'types/auth';

const initialState: AuthState = {
  userInfo: {
    email: '',
    name: '',
    phone: '',
  },
  isAuthenticated: false,
  isAppLoaded: false,
};

const RoomsReducer = (state = initialState, action: AuthActions): AuthState => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.AUTHENTICATED:
    return { ...state, isAuthenticated: (payload as boolean) };
  case ActionTypes.SET_USER_INFO:
    return { ...state, userInfo: { ...state.userInfo, ...(payload as User) } };
  case ActionTypes.SET_IS_APP_LOADED:
    return { ...state, isAppLoaded: (payload as boolean) };
  default:
    return state;
  }
};

export default RoomsReducer;
