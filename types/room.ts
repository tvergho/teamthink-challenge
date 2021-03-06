import { Action } from './state';

// Action types.
export enum ActionTypes {
  UPDATE_ROOMS = 'UPDATE_ROOMS',
  UPDATE_ROOM_TOKEN = 'UPDATE_ROOM_TOKEN',
  SET_LOADING = 'SET_LOADING',
  SET_CURRENT_ROOM = 'SET_CURRENT_ROOM'
}

// Specific models.
export type Room = {
  id: string,
  name: string,
  active: boolean,
}

// Redux state representation.
export type RoomState = {
  rooms: Room[],
  roomToken: string,
  loading: boolean,
  currentRoom: Room
}

// Actions as types.
export type UpdateRoomsAction = Action<typeof ActionTypes.UPDATE_ROOMS, Room[]>
export type UpdateRoomTokenAction = Action<typeof ActionTypes.UPDATE_ROOM_TOKEN, string>
export type SetLoadingAction = Action<typeof ActionTypes.SET_LOADING, boolean>
export type SetRoomAction = Action<typeof ActionTypes.SET_CURRENT_ROOM, Room>

export type RoomActions = UpdateRoomsAction | UpdateRoomTokenAction | SetLoadingAction | SetRoomAction; // The type that represents all possible actions.
export type RoomActionTypes = `${ActionTypes}`; // The type that represents all possible action types (as strings).
