import { userActionTypes } from "./users.type";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
      return {
        currentUser: action.payload,
        error: null,
      };

    case userActionTypes.GOOGLE_SIGNIN_FALIURE:
    case userActionTypes.EMAIL_SIGNIN_FALIURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
