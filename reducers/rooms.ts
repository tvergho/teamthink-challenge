import type { RoomActions, RoomState } from 'types/room';
import { ActionTypes } from 'types/room';

const initialState: RoomState = {
  rooms: [],
};

const RoomsReducer = (state = initialState, action: RoomActions): RoomState => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.UPDATE_ROOMS:
    return { ...state, rooms: payload };
  default:
    return state;
  }
};

export default RoomsReducer;
