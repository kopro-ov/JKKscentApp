import reducers from '../redux/reducers/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const applyStoreMiddleware = applyMiddleware(thunk)(createStore);
export const store = applyStoreMiddleware(reducers);
