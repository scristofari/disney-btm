import firebase from 'firebase';
import { config } from '../config';

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();

export function userLogin() {
    return dispatch => {
        firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(result => dispatch(signInSuccess(result)))
            .catch(error => dispatch(signInError(error)));
    };
}

export function userLogout() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}


export function userInit() {
    return dispatch => {
        firebaseAuth.onAuthStateChanged(user => {
            dispatch(userAuthInit(user))
        })
    };
}

export function userAuthInit(user) {
    return {
        type: 'USER_AUTH_INIT',
        payload: user
    };
}

export function signInError(error) {
    return {
        type: 'USER_AUTH_ERROR',
        payload: error
    };
}

export function signInSuccess(result) {
    return {
        type: 'USER_AUTH_SUCCESS',
        payload: result.user
    };
}

export function signOutSuccess() {
  return {
    type: 'USER_AUTH_LOGOUT_SUCCESS'
  };
}