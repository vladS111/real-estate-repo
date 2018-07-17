import { connect } from 'react-redux';

import PropertyListComponent from "../components/PropertyListComponent";
import {
    getProperties
} from "../actions";

const mapStateToProps = (state) => {

    return {
        properties: state.properties,
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        getProperties: () => {
            dispatch(getProperties())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListComponent);
