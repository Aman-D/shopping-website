import { userActionTypes } from "./users.type";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
