import { SEARCH_DATA } from "../actions/types";

export default function getSearchContent(state = "", action) {
    switch (action.type) {
        case SEARCH_DATA:
            return action.data;
        default:
            return state;
    }
}
