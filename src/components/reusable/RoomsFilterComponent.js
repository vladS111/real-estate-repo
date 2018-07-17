import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class RoomsFilterComponent extends Component {

    constructor(props) {
        super(props);

        // initialize rooms from props
        this.rooms = props.rooms;
    }

    handleCheckbox = (isChecked, value)  => {

        if (isChecked) this.rooms.push(value);
        if(!isChecked) this.rooms.splice(this.rooms.indexOf(value), 1);

        // Make sure that "all" checkbox is selected when all the other ones are not checked
        if(!isChecked && this.rooms.length === 0 && value !== "all") this.rooms.push("all");

        // Make sure "all" checkbox is unchecked the moment the user selects any other checkbox
        if(isChecked && this.rooms.indexOf("all") !== -1 && value !== "all") this.rooms.splice(this.rooms.indexOf("all"), 1);

        this.props.handleChange(this.rooms);
    }

    render() {
        return (
            <div className="rooms">
                <FormControl component="fieldset">
                    <FormLabel component="legend">КОЛИЧЕСТВО КОМНАТ</FormLabel>
                    <FormGroup>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.rooms.indexOf("all") !== -1}
                                    value="all"
                                    onChange={(event, isChecked) => this.handleCheckbox(isChecked, "all")}
                                />
                            }
                            label="Все"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.rooms.indexOf(1) !== -1}
                                    onChange={(event, isChecked) => this.handleCheckbox(isChecked, 1)}
                                    value="1"
                                />
                            }
                            label="1 комната"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.rooms.indexOf(2) !== -1}
                                    onChange={(event, isChecked) => this.handleCheckbox(isChecked, 2)}
                                    value="2"
                                />
                            }
                            label="2 комнаты"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.rooms.indexOf(3) !== -1}
                                    onChange={(event, isChecked) => this.handleCheckbox(isChecked, 3)}
                                    value="3"
                                />
                            }
                            label="3 комнаты"
                        />

                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

RoomsFilterComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired
};

export default RoomsFilterComponent;
