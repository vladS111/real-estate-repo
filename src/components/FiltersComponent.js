import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrencyFilterComponent from "./reusable/CurrrencyFilterComponent";
import PriceFilterComponent from "./reusable/PriceFilterComponent";
import RoomsFilterComponent from "./reusable/RoomsFilterComponent";
import RatingFilterComponent from "./reusable/RatingFilterComponent";

class FiltersComponent extends Component {

    handleRatingChange = (rating) => {
        this.props.changeRatingFilter(rating);
    };

    handleCurrencyChange = (currency) => {
        this.props.changeCurrencyFilter(currency)
    };

    handleRoomsChange = (rooms) => {
        this.props.changeRoomsFilter(rooms);
    };

    handlePriceChange = (price) => {
        this.props.changePriceFilter(price);
    };

    render() {

        const { rating, currency, rooms, price } = this.props.filters;

        return (
            <div className="filters">

               <CurrencyFilterComponent handleChange={this.handleCurrencyChange} currency={currency}/>
               <RoomsFilterComponent handleChange={this.handleRoomsChange} rooms={rooms}/>
               <PriceFilterComponent handleChange={this.handlePriceChange} price={price} currency={currency}/>
               <RatingFilterComponent handleChange={this.handleRatingChange} rating={rating}/>

            </div>
        );
    }
}

FiltersComponent.propTypes = {
    filters: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
        price: PropTypes.shape({
            from: PropTypes.number.isRequired,
            to: PropTypes.number.isRequired
        }),
        rating: PropTypes.number.isRequired,
        quotes: PropTypes.shape({
            "USDUAH": PropTypes.number.isRequired,
            "USDEUR": PropTypes.number.isRequired
        })
    })
};

export default FiltersComponent;
