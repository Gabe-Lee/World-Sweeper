import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import system from './reducers/system';

const masterReducer = combineReducers({
  system,
});
export type Store = ReturnType<typeof masterReducer>;

export default createStore(
  masterReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
