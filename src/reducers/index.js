import { combineReducers } from "redux";
import data1 from "./getSearchContent"
import getAllApiData from "./getAllApiData"
import getAllFavData from "./getAllFavData";
import getIsPopupOpen from "./getIsPopupOpen";

export default combineReducers({
    data1: data1,
    getAllApiData,
    getAllFavData,
    getIsPopupOpen
});
