import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import FormLabel from '@material-ui/core/FormLabel';

class RatingFilterComponent extends Component {

    render() {

        const { handleChange, rating } = this.props;
        const hotPink = '#F50F57';

        return (
            <div className="rating">
                <FormLabel>РЕЙТИНГ</FormLabel>
                <div className="rating-input">

                    <ReactStars
                        count={5}
                        size={36}
                        value={rating}
                        color2={hotPink}
                        onChange={(value) => handleChange(value)}
                    />

                </div>
            </div>
        );
    }
}

RatingFilterComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired
};

export default RatingFilterComponent;
