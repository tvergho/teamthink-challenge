import { Action } from 'types/state';
import { SampleActionTypes, ActionTypes } from 'types/sample';
import { Empty } from 'types/generic';

export const sampleFunction = (): Action<SampleActionTypes, Empty> => {
  return { type: ActionTypes.SAMPLE_ACTION };
};
