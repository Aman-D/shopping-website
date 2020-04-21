import userActionTypes from "./users.type";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFaliure = (error) => ({
  type: userActionTypes.SIGNIN_FALIURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFaliure = (error) => ({
  type: userActionTypes.SIGNOUT_FALIURE,
  payload: error,
});

export const signUpStart = (emailAndPasswordDisplayName) => ({
  type: userActionTypes.SIGNUP_START,
  payload: emailAndPasswordDisplayName,
});

export const signUpFaliure = (error) => ({
  type: userActionTypes.SIGNUP_START,
  payload: error,
});
