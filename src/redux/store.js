import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist"; // for local storage

//store expects an array of middelwares from redux
const middelwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelwares));
const persistor = persistStore(store);
//creates a new provider that wraps our application
export { store, persistor };
