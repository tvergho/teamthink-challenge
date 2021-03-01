/* eslint-disable @typescript-eslint/no-empty-interface */
import { SampleActions } from 'types/sample';

export interface SampleState {}

const initialState = {};

const SampleReducer = (state = initialState, action: SampleActions): SampleState => {
  switch (action.type) {
  default:
    return state;
  }
};

export default SampleReducer;
