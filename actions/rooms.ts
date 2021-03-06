import type { ThunkResult, GlobalDispatch, RootState } from 'types/state';
import { ActionTypes, Room, RoomActions } from 'types/room';
import * as RoomService from 'services/rooms';
import isTokenValid from 'utils/isTokenValid';
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
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
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

export const onRoomLoad = (roomName: string): ThunkResult => {
  return async (dispatch: GlobalDispatch, getState: () => RootState) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });

    // First, check if there's an existing token and room stored in Redux.
    // Use that only if the room name matches the URL parameter and the token is valid.
    const roomState = getState().rooms;
    if (roomState.currentRoom && roomState.currentRoom.name === roomName) {
      // Reset the token if it's expired.
      if (!isTokenValid(roomState.roomToken)) {
        dispatch(requestAccess(roomState.currentRoom));
      } else {
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
      return;
    }

    try {
      // Next, check if this room name exists on the server (in production this should also check whether the user is authenticated to access the room).
      const rooms = await RoomService.getRooms();
      dispatch({ type: ActionTypes.UPDATE_ROOMS, payload: rooms });

      const namedRoom = rooms.find((room) => room.name === roomName);

      if (namedRoom) { // We found a match.
        dispatch(requestAccess(namedRoom));
        dispatch(setCurrentRoom(namedRoom));
      } else { // There was no room found, end the loading state.
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
    } catch (e) {
      dispatch(setError(e, true));
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }
  };
};

export const setRoomLoading = (loading: boolean): RoomActions => {
  return { type: ActionTypes.SET_LOADING, payload: loading };
};
