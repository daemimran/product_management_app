import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { products } from './products';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export const initialState = {
  productReducer: { products }
};

const store = mockStore(initialState);

export default store;
