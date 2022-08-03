import { IS_POPUP_OPEN } from "../actions/types";

export default function getIsPopupOpen(state = "", action) {
    switch (action.type) {
        case IS_POPUP_OPEN:
            return action.data;
        default:
            return state;
    }
}
