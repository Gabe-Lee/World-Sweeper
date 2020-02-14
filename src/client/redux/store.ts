import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({}),
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
