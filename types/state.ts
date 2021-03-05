import { Action as ReduxAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RoomState, RoomActions } from './room';
import { GlobalState, GlobalActions } from './global';

export interface Action<T, P> extends ReduxAction {
  type: T,
  payload?: P
}

export interface RootState {
  rooms: RoomState,
  global: GlobalState
}

export type Actions = RoomActions | GlobalActions;

export type GlobalDispatch = ThunkDispatch<RootState, undefined, Actions>;
export type ThunkResult = ThunkAction<void, RootState, undefined, Actions>;
