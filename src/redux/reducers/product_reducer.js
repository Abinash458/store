import { storeProducts } from '../../shared/data';
import { FETCH_PRODUCT } from '../actions/types';

export default function(state = { products: storeProducts }, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state}
        default: 
            return state
    }   
};