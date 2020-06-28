import { storeProducts, detailProduct } from '../../shared/data';

export const initialState = {
    products: storeProducts,
    detailedProduct: detailProduct
}

export default function(state = initialState, action) {
    // switch(action.type){
    //     case DARK_MODE:
    //         return { ...state, darkMode: action.payload}
    //     default:
    //         return state;
    // }
    return state;
};