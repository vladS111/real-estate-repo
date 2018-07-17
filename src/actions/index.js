import axios from 'axios';

import {
    GET_PROPERTIES_REQUEST,
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTIES_FAILURE,
    CHANGE_CURRENCY_FILTER,
    CHANGE_PRICE_FILTER,
    CHANGE_ROOMS_FILTER,
    CHANGE_RATING_FILTER
} from "../constants/actionTypes";
import { propertiesApiUrl, currencyApiUrl } from "../constants/api";

export const getProperties = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PROPERTIES_REQUEST
        });

        axios.get(propertiesApiUrl)
            .then(response => {
                dispatch({
                    type: GET_PROPERTIES_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_PROPERTIES_FAILURE,
                    payload: error
                })
            })
    }
}

export const changeCurrencyFilter = (currency) => {
    return (dispatch) => {
        axios.get(currencyApiUrl)
            .then(response => {
                    dispatch({
                        type: CHANGE_CURRENCY_FILTER,
                        payload: currency,
                        quotes: response.data.quotes
                    })
                }
            )
        .catch(err => console.log(err));
    }
};

export const changePriceFilter = (price) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PRICE_FILTER,
            payload: price
        })
    }
};

export const changeRoomsFilter = (rooms) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ROOMS_FILTER,
            payload: rooms
        })
    }
};

export const changeRatingFilter = (rating) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_RATING_FILTER,
            payload: rating
        })
    }
};



