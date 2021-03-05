import { ActionTypes, GlobalActions } from 'types/global';

export const setError = (e: Error | string, display: boolean): GlobalActions => {
  console.log(e);
  if (display) return { type: ActionTypes.SET_ERROR, payload: typeof e === 'string' ? e : e.message };
  else return { type: ActionTypes.SET_ERROR, payload: '' };
};

export * from './rooms';
