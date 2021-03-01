import { ActionType, ActionTypes } from 'actions';

export const sampleFunction = (): ActionType => {
  return { type: ActionTypes.SAMPLE_ACTION };
};
