import { detailProduct } from "../../shared/data";
import { FETCH_DETAILED_PRODUCT } from "../actions/types";

export default function (state = { detailedProduct: detailProduct }, action) {
  switch (action.type) {
    case FETCH_DETAILED_PRODUCT:
      return { ...state };
    default:
      return state;
  }
}
