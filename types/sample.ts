import { Action } from './state';
import { Empty } from './generic';

export const SAMPLE_ACTION = 'SAMPLE_ACTION';

export type SampleAction = Action<typeof SAMPLE_ACTION, Empty>
export type SampleActions = SampleAction;
export type SampleActionTypes = typeof SAMPLE_ACTION;
