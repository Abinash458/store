import { combineReducers } from "redux";
import config from "./config_reducer";
import productReducer from "./product_reducer";
import detailProductReducer from "./detailProduct_reducer";

export default combineReducers({
  config,
  productReducer,
  detailProductReducer,
});
