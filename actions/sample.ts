import { ThunkResult, GlobalDispatch } from 'types/state';
import { ActionTypes, SampleActions } from 'types/sample';

export const sampleFunction = (): SampleActions => {
  return { type: ActionTypes.SAMPLE_ACTION };
};

export const sampleDispatchFunction = (): ThunkResult => {
  return (dispatch: GlobalDispatch) => {
    dispatch(sampleFunction());
  };
};
