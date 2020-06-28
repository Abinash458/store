import { DARK_MODE } from './types';
// import { PRODUCT_LIST } from './types';

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