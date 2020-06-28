import { combineReducers } from 'redux';
import config from './config_reducer';
import productReducer from './product_reducer';
import detailProductReducer from './detailProduct_reducer';

const rootReducer = combineReducers({
    config,
    productReducer,
    detailProductReducer
})

export default rootReducer;