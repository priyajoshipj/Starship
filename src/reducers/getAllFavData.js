import { FAV_DATA, UN_FAV_DATA } from "../actions/types";

export default function getAllFavData(state = [], action) {
    switch (action.type) {
        case FAV_DATA:
            let temp = [...state]
            temp.push(action.data)
            return temp;
        case UN_FAV_DATA:
            let temp2 = state.filter((x) => {
                if (action.data != x) {
                    return x
                }
            })
            return temp2;
        default:
            return state;
    }
}
