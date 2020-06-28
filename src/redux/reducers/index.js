import { combineReducers } from 'redux';
import config from './config_reducer';
import productReducer from './product_reducer';

const rootReducer = combineReducers({
    config,
    productReducer
})

export default rootReducer;