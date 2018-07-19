import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';


import PropertyCardComponent from "./PropertyCardComponent";

class PropertyListComponent extends Component {

    componentDidMount() {
        this.props.getProperties();
    }

    renderProperties = () => {

        const { properties } = this.props.properties;
        const { currency, quotes } = this.props.filters;

        const filteredProperties = this.filterProperties(properties);

        if(filteredProperties.length === 0) {
            return (
                <div className="search-results">
                    Похоже, мы ничего не нашли. Попробуйте изменить условия поиска и попробовать ещё раз! Например:
                    <ul className="list">
                        <li className="list-item">Выберите нужное количество комнат</li>
                        <li className="list-item">Расширьте ценовой диапазон</li>
                        <li className="list-item">Сбросьте фильтры</li>
                    </ul>
                </div>
            );
        }


        return filteredProperties.map(property => {
            return <PropertyCardComponent
                            property={property}
                            key={property.id}
                            currency={currency}
                            quotes={quotes}/>
        });
    }

    getCalculatedPrice = (price, currency, quotes) => {

        const USDUAH = quotes["USDUAH"];
        const USDEUR = quotes["USDEUR"];
        let calculatedPrice;

        switch (currency) {

            case "UAH":
                calculatedPrice = {
                    from: price.from,
                    to: price.to
                }
                return calculatedPrice;

            case "USD":
                calculatedPrice = {
                    from: +(price.from *  USDUAH).toFixed(0),
                    to: +(price.to * USDUAH).toFixed(0)
                }
                return calculatedPrice;

            case "EUR":
                calculatedPrice = {
                    from: +((price.from * USDUAH) / USDEUR).toFixed(0),
                    to: +((price.to * USDUAH) / USDEUR).toFixed(0)
                }
                return calculatedPrice;

            default:
                console.error("Unexpected currency");
        }

    }

    filterProperties = (properties) => {

        const { rooms, price, rating, currency, quotes } = this.props.filters;

        const calculatedPrice = this.getCalculatedPrice(price, currency, quotes);

        const filteredProperties = properties
            .filter(property => property.rating >= rating)
            .filter(property => calculatedPrice.from !== 0 ? property.price > calculatedPrice.from : property)
            .filter(property => calculatedPrice.to !== 0 ? property.price < calculatedPrice.to : property)
            .filter(property => {
                return (rooms.indexOf("all") === -1 || rooms.length === 0) ? rooms.some(room => room === property.total_rooms) : property;
            });

        return filteredProperties;
    }

    render() {
        const { loading } = this.props.properties;

        if (loading) {
            return (
              <div className="property-list loading">
                  <BarLoader color={"#33419E"}/>
              </div>
            );
       }
        return (
            <div className="property-list">
                {this.renderProperties()}
            </div>
        );
    }
}

PropertyListComponent.propTypes = {
    getProperties: PropTypes.func.isRequired,
    properties: PropTypes.shape({
        properties: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        error: PropTypes.object
    })
};

export default PropertyListComponent;
