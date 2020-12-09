import React, { Component } from 'react';
import { connect }  from 'react-redux'; 
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { getForecastDataFromCities, getCity } from '../reducers/';

export class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props
        return (
            <div>
                {
                    this.props.city === null ?
                    <h2 className="text-center text-light">No se ha seleccionado ciudad.</h2> :
                    <ForecastExtended city={city} forecastData={forecastData} />
                }
            </div>
        )
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array,
}

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) }) // es lo mismo que "state => ({city: state.city})""

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
