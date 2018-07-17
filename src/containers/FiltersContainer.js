import { connect } from 'react-redux';

import FiltersComponent from "../components/FiltersComponent";
import {
    changeCurrencyFilter,
    changePriceFilter,
    changeRatingFilter,
    changeRoomsFilter
} from "../actions";

const mapStateToProps = (state) => {

    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        changeCurrencyFilter: (currency) => {
            dispatch(changeCurrencyFilter(currency))
        },
        changeRoomsFilter: (rooms) => {
            dispatch(changeRoomsFilter(rooms))
        },
        changePriceFilter: (price) => {
            dispatch(changePriceFilter(price))
        },
        changeRatingFilter: (rating) => {
            dispatch(changeRatingFilter(rating))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);
