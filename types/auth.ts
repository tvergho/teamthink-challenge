import { Action } from './state';

// Action types.
export enum ActionTypes {
  AUTHENTICATED = 'AUTHENTICATED',
  SET_USER_INFO = 'SET_USER_INFO',
  SET_IS_APP_LOADED = 'SET_IS_APP_LOADED'
}

// Specific models.
export type User = {
  email: string,
  name: string,
  phone: string
}

// Redux state representation.
export type AuthState = {
  isAuthenticated: boolean,
  userInfo: User,
  isAppLoaded: boolean
}

// Actions as types.
export type SetAuthenticateAction = Action<typeof ActionTypes.AUTHENTICATED, boolean>
export type SetUserInfoAction = Action<typeof ActionTypes.SET_USER_INFO, User>
export type SetIsAppLoadedAction = Action<typeof ActionTypes.SET_IS_APP_LOADED, boolean>

export type AuthActions = SetAuthenticateAction | SetUserInfoAction | SetIsAppLoadedAction; // The type that represents all possible actions.
export type RoomActionTypes = `${ActionTypes}`; // The type that represents all possible action types (as strings).
