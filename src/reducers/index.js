import { combineReducers } from 'redux';
import propertiesReducer from './propertiesReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    properties: propertiesReducer,
    filters: filtersReducer
})
