import * as constants from '../constants/productConstants';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_PRODUCT:
      return {
        products: state.products.concat(action.payload),
      };
    case constants.REMOVE_PRODUCT:
      return {
        products: state.products.filter((product) => product !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
