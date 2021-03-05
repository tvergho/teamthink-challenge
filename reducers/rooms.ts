import type { RoomActions, RoomState, Room } from 'types/room';
import { ActionTypes } from 'types/room';

const initialState: RoomState = {
  rooms: [],
  roomToken: '',
  loading: true,
};

const RoomsReducer = (state = initialState, action: RoomActions): RoomState => {
  const { type, payload } = action;

  switch (type) {
  case ActionTypes.UPDATE_ROOMS:
    return { ...state, rooms: (payload as Room[]) };
  case ActionTypes.UPDATE_ROOM_TOKEN:
    return { ...state, roomToken: (payload as string) };
  case ActionTypes.SET_LOADING:
    return { ...state, loading: (payload as boolean) };
  default:
    return state;
  }
};

export default RoomsReducer;
