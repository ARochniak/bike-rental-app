import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initialState';

export default function() {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}
