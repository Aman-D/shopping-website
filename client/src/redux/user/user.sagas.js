import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./users.type";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFaliure,
  signOutSuccess,
  signOutFaliure,
  signUpFaliure,
} from "./user.actions";

export function* getRef(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const sanpshot = yield userRef.get();
    yield put(signInSuccess({ id: sanpshot.id, ...sanpshot.data() }));
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getRef(user);
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getRef(user);
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getRef(userAuth);
  } catch (error) {
    yield put(signInFaliure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFaliure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user, {
      displayName,
    });
    const sanpshot = yield userRef.get();
    yield put(signInSuccess({ id: sanpshot.id, ...sanpshot.data() }));
  } catch (err) {
    yield put(signUpFaliure);
  }
}

export function* signUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
  ]);
}
