import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class CurrencyFilterComponent extends Component {

    render() {

        const { handleChange, currency } = this.props;

        return (
            <div className="currency">
                <FormControl component="fieldset">
                    <FormLabel component="legend">ВАЛЮТА</FormLabel>

                    <RadioGroup
                        aria-label="currency"
                        name="currency"
                        value={currency}
                        onChange={(event, value) => handleChange(value)}
                    >
                        <FormControlLabel value="UAH" control={<Radio />} label="UAH" />
                        <FormControlLabel value="USD" control={<Radio />} label="USD" />
                        <FormControlLabel value="EUR" control={<Radio />} label="EUR" />

                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

CurrencyFilterComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired
};

export default CurrencyFilterComponent;
