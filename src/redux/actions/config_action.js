import { DARK_MODE } from './types';
import { FETCH_PRODUCT } from './types';
import { FETCH_DETAILED_PRODUCT } from './types';

export function darkModeAction(variable) {
    return {
        type: DARK_MODE,
        payload: variable
    }
}

export function handleDetail() {
    console.log("hello from Details")
}

export function addToCart() {
    console.log("hello from Cart")
}

export function fetchProduct() {
    return{
        type: FETCH_PRODUCT
    }
}

export function fetchDetailedProduct() {
    return{
        type: FETCH_DETAILED_PRODUCT
    }
}