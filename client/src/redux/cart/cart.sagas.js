import { ClearCart } from "./cart.actions";
import userActionTypes from "../user/users.type";
import { takeLatest, all, call, put } from "redux-saga/effects";

export function* clearCart() {
  yield put(ClearCart());
}

export function* getSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCart);
}

export default function* cartSagas() {
  yield all([call(getSignOutSuccess)]);
}
