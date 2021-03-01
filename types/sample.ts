/* eslint-disable @typescript-eslint/no-empty-interface */
import { Action } from './state';
import { Empty } from './generic';

export enum ActionTypes {
  SAMPLE_ACTION = 'SAMPLE_ACTION',
}

export type SampleState = Empty

export type SampleAction = Action<typeof ActionTypes.SAMPLE_ACTION, Empty>

export type SampleActions = SampleAction;
export type SampleActionTypes = `${ActionTypes}`;
