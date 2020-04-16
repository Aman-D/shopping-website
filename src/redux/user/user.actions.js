import { userActionTypes } from "./users.type";
export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
