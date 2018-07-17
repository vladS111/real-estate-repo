import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';

class PriceFilterComponent extends Component {

    constructor(props) {
        super(props);

        // initialize price from props
        this.price = props.price;
    }

    handleNumberInput = (event, type) => {

        const { value } = event.target;

        switch (type) {

            case "FROM":
                this.price.from = +value;
                break;

            case "TO":
                this.price.to = +value;
                break;

            default:
                console.error("Unexpected number input type");
        }

        this.props.handleChange(this.price);
    }

    render() {

        const { currency } = this.props;

        return (
            <div className="price">

                    <FormLabel>ЦЕНА (в {currency})</FormLabel>

                    <div className="price-input">

                        <InputLabel htmlFor="price-from">от</InputLabel>
                        <Input
                            type="number"
                            id="price-from"
                            inputProps={{
                                'aria-label': 'Description',
                                min: 0,
                            }}
                            onChange={(event) => this.handleNumberInput(event, "FROM")}
                        />

                        <InputLabel htmlFor="price-to">до</InputLabel>
                        <Input
                            type="number"
                            id="price-to"
                            inputProps={{
                                'aria-label': 'Description',
                                min: 0,
                            }}
                            onChange={(event) => this.handleNumberInput(event, "TO")}
                        />

                    </div>
            </div>
        );
    }
}

PriceFilterComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired
    })
};

export default PriceFilterComponent;
