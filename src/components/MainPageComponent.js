import React, {Component} from 'react';

import PropertyListContainer from "../containers/PropertyListContainer";
import FiltersContainer from "../containers/FiltersContainer";

class MainPageComponent extends Component {
    render() {
        return (
            <div className="main-page">

                <FiltersContainer/>
                <PropertyListContainer/>

            </div>
        );
    }
}


export default MainPageComponent;
