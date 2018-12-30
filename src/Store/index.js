import { createStore, applyMiddleware } from 'redux';
import { auth } from './middleware';
import reducer from './reducer';

export const store = createStore(reducer, applyMiddleware(auth));
