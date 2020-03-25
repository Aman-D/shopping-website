import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { logger } from 'redux-logger';

//store expects an array of middelwares from redux
const middelwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelwares))

export default store;