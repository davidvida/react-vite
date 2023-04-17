import { createStore } from 'redux'
import { initialState } from '../reducer/initial-state';
import reducer from '../reducer/reducer';

let store = createStore(reducer, initialState);

export default store;
