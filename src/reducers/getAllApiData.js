import { ALL_API_DATA } from "../actions/types";

export default function getAllApiData(state = [], action) {
    switch (action.type) {
        case ALL_API_DATA:
            return action.data;
        default:
            return state;
    }
}
