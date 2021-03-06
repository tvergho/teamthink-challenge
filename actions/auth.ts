import { ActionTypes, User } from 'types/auth';
import { GlobalDispatch, ThunkResult } from 'types/state';
import { userNameKey } from 'lib/constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import firebase from 'firebase_init';

const registerFirebase = (user: User): void => {
  firebase.auth().createUserWithEmailAndPassword(user.email, 'ILoveXander')
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const registerUser = (user: User): ThunkResult => {
  return (dispatch: GlobalDispatch) => {
    registerFirebase(user);
    dispatch({ type: ActionTypes.SET_USER_INFO, payload: user });
    dispatch({ type: ActionTypes.AUTHENTICATED, payload: true });
    localStorage.setItem(userNameKey, user.name);
  };
};

export const logout = (): ThunkResult => {
  return (dispatch: GlobalDispatch) => {
    dispatch({ type: ActionTypes.SET_USER_INFO, payload: { email: '', phone: '', name: '' } });
    dispatch({ type: ActionTypes.AUTHENTICATED, payload: false });
    localStorage.removeItem(userNameKey);
  };
};

export const initialLoad = (): ThunkResult => {
  return (dispatch: GlobalDispatch) => {
    const name = localStorage.getItem(userNameKey);
    if (name) {
      dispatch(registerUser({ name, email: '', phone: '' }));
    }
    dispatch({ type: ActionTypes.SET_IS_APP_LOADED, payload: true });
  };
};
