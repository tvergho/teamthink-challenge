import { SampleActions, ActionTypes, SampleState } from 'types/sample';

const initialState: SampleState = {};

const SampleReducer = (state = initialState, action: SampleActions): SampleState => {
  switch (action.type) {
  case ActionTypes.SAMPLE_ACTION:
    return state;
  default:
    return state;
  }
};

export default SampleReducer;
