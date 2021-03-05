import { ActionTypes, GlobalActions } from 'types/global';

export const handleError = (e: Error): GlobalActions => {
  console.log(e);
  return { type: ActionTypes.SET_ERROR, payload: e.message };
};

export * from './rooms';
