import { Action as ReduxAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RoomState, RoomActions } from './room';
import { GlobalState, GlobalActions } from './global';
import { AuthState, AuthActions } from './auth';

export interface Action<T, P> extends ReduxAction {
  type: T,
  payload?: P
}

export interface RootState {
  rooms: RoomState,
  global: GlobalState,
  auth: AuthState
}

export type Actions = RoomActions | GlobalActions | AuthActions;

export type GlobalDispatch = ThunkDispatch<RootState, undefined, Actions>;
export type ThunkResult = ThunkAction<void, RootState, undefined, Actions>;
