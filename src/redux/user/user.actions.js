import { userActionTypes } from "./users.type";

export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});

export const googleSignInFaliure = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FALIURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const emailSignInFaliure = (error) => ({
  type: userActionTypes.EMAIL_SIGNIN_FALIURE,
  payload: error,
});
