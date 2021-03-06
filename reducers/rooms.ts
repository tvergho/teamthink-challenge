import type { RoomActions, RoomState, Room } from 'types/room';
import { ActionTypes } from 'types/room';

const initialState: RoomState = {
  rooms: [],
  roomToken: '',
  loading: true,
  currentRoom: null,
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
  case ActionTypes.SET_CURRENT_ROOM:
    return { ...state, currentRoom: (payload as Room) };
  default:
    return state;
  }
};

export default RoomsReducer;
