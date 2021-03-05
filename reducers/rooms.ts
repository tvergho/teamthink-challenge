import type { RoomActions, RoomState, Room } from 'types/room';
import { ActionTypes } from 'types/room';

const initialState: RoomState = {
  rooms: [],
  roomToken: '',
};

const RoomsReducer = (state = initialState, action: RoomActions): RoomState => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.UPDATE_ROOMS:
    return { ...state, rooms: (payload as Room[]) };
  case ActionTypes.UPDATE_ROOM_TOKEN:
    return { ...state, roomToken: (payload as string) };
  default:
    return state;
  }
};

export default RoomsReducer;
