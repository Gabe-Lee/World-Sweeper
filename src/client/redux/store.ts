import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import system from './system/reducer';

const masterReducer = combineReducers({
  system,
});

export type Store = ReturnType<typeof masterReducer>;
declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(masterReducer, compose(applyMiddleware(thunk), reduxDev()));
