import { takeLatest, call, put } from "redux-saga/effects";
import shopActionTypes from "./shop.actionTypes";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFaliure,
  fetchCollectionsSuccess,
} from "./shop.action";

export function* fetchCollectionAsyncSaga() {
  yield console.log("Saga In Action");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFaliure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsyncSaga
  );
}
