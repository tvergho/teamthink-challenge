import type { ThunkResult, GlobalDispatch } from 'types/state';
import { ActionTypes } from 'types/room';
import * as RoomService from 'services/rooms';
import { setError } from './index';

export const getRooms = (): ThunkResult => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const rooms = await RoomService.getRooms();
      dispatch({ type: ActionTypes.UPDATE_ROOMS, payload: rooms });
    } catch (e) {
      dispatch(setError(e, true));
    }
  };
};