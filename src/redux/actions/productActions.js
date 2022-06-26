import { createAction } from 'redux-actions';
import * as constants from '../constants/productConstants';

export const AddNewProduct = createAction(constants.ADD_PRODUCT);
export const DeleteProduct = createAction(constants.REMOVE_PRODUCT);
