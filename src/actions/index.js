import { SEARCH_DATA, ALL_API_DATA, FAV_DATA, UN_FAV_DATA, IS_POPUP_OPEN } from "./types";

export const setSearchContent = data => {
    return {
        type: SEARCH_DATA,
        data
    };
};

export const setAPIData = data => {
    return {
        type: ALL_API_DATA,
        data
    };
};

export const setFavData = data => {
    return {
        type: FAV_DATA,
        data
    };
};
export const setUnFavData = data => {
    return {
        type: UN_FAV_DATA,
        data
    };
};


export const setIsPopupOpen = data => {
    return {
        type: IS_POPUP_OPEN,
        data
    };
};