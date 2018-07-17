import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import Today from '@material-ui/icons/Today';

class PropertyCardComponent extends Component {

    getProductPrice = () => {

        const { currency, quotes } = this.props;
        const { price } = this.props.property;
        let calculatedPrice;

        const USDUAH = quotes["USDUAH"];
        const USDEUR = quotes["USDEUR"];

        switch (currency) {

            case "UAH":
                calculatedPrice = price;
                break;

            case "USD":
                calculatedPrice = +(price / USDUAH).toFixed(0);
                break;

            case "EUR":
                calculatedPrice = +((price / USDUAH) * USDEUR).toFixed(0);
                break;

            default:
                console.error("Unexpected currency");
        }

        return <NumberFormat
                    value={calculatedPrice}
                    displayType={'text'}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    suffix={` ${currency}`} />
    }

    render() {

        const { full_address, description, images, rating, total_rooms, public_date } = this.props.property;
        const hotPink = '#F50F57';


        return (
            <div className="property-card">

                <div className="left-section">
                    <img src={images[0]} alt="Property" className="image"/>
                    <div className="rating">

                        <ReactStars
                            count={5}
                            size={36}
                            edit={false}
                            value={rating}
                            color2={hotPink}
                        />

                    </div>
                </div>

                <div className="right-section">

                    <h1 className="address">
                        {full_address.toUpperCase()}
                    </h1>

                    <div className="description">
                        {description}
                    </div>

                    <div className="details">

                        <div className="rooms">
                            <Home/>
                            <p>{total_rooms} комнат(ы)</p>
                        </div>

                        <div className="dates">
                            <Today/>
                            <p>{public_date}</p>
                        </div>

                    </div>

                    <div className="purchase">
                        <Button variant="contained" color="primary">
                            купить за&nbsp; {this.getProductPrice()}
                        </Button>
                    </div>

                </div>
            </div>
        );
    }
}

PropertyCardComponent.propTypes = {
    property: PropTypes.shape({
        full_address: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array,
        rating: PropTypes.number,
        total_rooms: PropTypes.number.isRequired,
        public_date: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
};

export default PropertyCardComponent;
