import {
    CHANGE_CURRENCY_FILTER,
    CHANGE_ROOMS_FILTER,
    CHANGE_PRICE_FILTER,
    CHANGE_RATING_FILTER
} from "../constants/actionTypes";

const INITIAL_STATE = {
    currency: 'UAH',
    rooms: ["all"],
    price: {
        from: 0,
        to: Infinity
    },
    rating: 0,
    quotes: {
        "USDUAH": 26.219999,
        "USDEUR": 0.851946,
        "USDUSD": 1
    }
}

const filtersReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case CHANGE_CURRENCY_FILTER:
            return { ...state, currency: action.payload, quotes: action.quotes };

        case CHANGE_ROOMS_FILTER:
            return { ...state, rooms: action.payload };

        case CHANGE_PRICE_FILTER:
            return { ...state, price: action.payload };

        case CHANGE_RATING_FILTER:
            return { ...state, rating: action.payload };

        default:
            return state;
        }
};

export default filtersReducer;
