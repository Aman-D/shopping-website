import userActionTypes from "./users.type";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGNIN_SUCCESS:
      return {
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGNOUT_SUCCESS:
      return {
        currentUser: null,
        error: null,
      };

    case userActionTypes.SIGNIN_FALIURE:
    case userActionTypes.SIGNOUT_FALIURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
