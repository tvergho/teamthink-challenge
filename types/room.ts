import { Action } from './state';

// Action types.
export enum ActionTypes {
  UPDATE_ROOMS = 'UPDATE_ROOMS',
  UPDATE_ROOM_TOKEN = 'UPDATE_ROOM_TOKEN'
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
  roomToken: string
}

// Actions as types.
export type UpdateRoomsAction = Action<typeof ActionTypes.UPDATE_ROOMS, Room[]>
export type UpdateRoomTokenAction = Action<typeof ActionTypes.UPDATE_ROOM_TOKEN, string>

export type RoomActions = UpdateRoomsAction | UpdateRoomTokenAction; // The type that represents all possible actions.
export type RoomActionTypes = `${ActionTypes}`; // The type that represents all possible action types (as strings).
