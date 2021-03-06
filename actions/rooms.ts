import type { ThunkResult, GlobalDispatch } from 'types/state';
import { ActionTypes, Room, RoomActions } from 'types/room';
import * as RoomService from 'services/rooms';
import { setError } from './index';

export const getRooms = (): ThunkResult => {
  return async (dispatch: GlobalDispatch) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, payload: true });
      const rooms = await RoomService.getRooms();
      dispatch({ type: ActionTypes.UPDATE_ROOMS, payload: rooms });
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    } catch (e) {
      dispatch(setError(e, true));
    }
  };
};

export const requestAccess = (room: Room): ThunkResult => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const token = await RoomService.requestAccess(room.id);
      dispatch({ type: ActionTypes.UPDATE_ROOM_TOKEN, payload: token });
    } catch (e) {
      dispatch(setError(e, true));
    }
  };
};

export const createRoom = (name: string): ThunkResult => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const room = await RoomService.createRoom(name);
      dispatch({ type: ActionTypes.SET_CURRENT_ROOM, payload: room });
      dispatch(getRooms());
    } catch (e) {
      dispatch(setError(e, true));
    }
  };
};

export const setCurrentRoom = (room: Room): RoomActions => {
  return { type: ActionTypes.SET_CURRENT_ROOM, payload: room };
};
