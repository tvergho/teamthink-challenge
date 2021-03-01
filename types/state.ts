import { Action as ReduxAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { SampleState, SampleActions } from './sample';

export interface Action<T, P> extends ReduxAction {
  type: T,
  payload?: P
}

export interface RootState {
  sample: SampleState
}

export type Actions = SampleActions;

export type GlobalDispatch = ThunkDispatch<RootState, undefined, Actions>;
export type ThunkResult = ThunkAction<void, RootState, undefined, Actions>;
