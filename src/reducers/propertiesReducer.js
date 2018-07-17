import {
    GET_PROPERTIES_REQUEST,
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTIES_FAILURE
} from "../constants/actionTypes";

const INITIAL_STATE = {
    properties: [],
    error: null,
    loading: false
}

const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_PROPERTIES_REQUEST:
            return { ...state, loading: true };

        case GET_PROPERTIES_SUCCESS:
            return { ...state, loading: false, properties: action.payload };

        case GET_PROPERTIES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default propertiesReducer;
