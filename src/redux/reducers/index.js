import { combineReducers } from 'redux';

import productReducer from './productReducer';

const appReducer = combineReducers({
  productReducer,
});

export const rootReducer = (state, action) => appReducer(state, action);
