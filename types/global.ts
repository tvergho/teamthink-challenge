import { Action } from './state';

// Action types.
export enum ActionTypes {
  SET_ERROR = 'SET_ERROR',
}

// Redux state representation.
export type GlobalState = {
  error: string
}

// Actions as types.
export type SetErrorAction = Action<typeof ActionTypes.SET_ERROR, string>

export type GlobalActions = SetErrorAction; // The type that represents all possible actions.
export type GlobalActionTypes = `${ActionTypes}`; // The type that represents all possible action types (as strings).
