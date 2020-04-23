import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist"; // for local storage
// # redux thunk is just a middel ware that allows us to fire functions
// import thunk from "redux-thunk";
//store expects an array of middelwares from redux

import createSagaMiddelware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddelWare = createSagaMiddelware();
const middelwares = [sagaMiddelWare];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middelwares));
sagaMiddelWare.run(rootSaga);
const persistor = persistStore(store);
//creates a new provider that wraps our application
export { store, persistor };
