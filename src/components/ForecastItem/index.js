import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData'


export class ForecastItem extends Component {
    render() {
        const { weekDay, hour, data } = this.props
        return (
            <div className="my-3">
                <span className="text-uppercase">{weekDay} a las {hour} hs.</span>
                <WeatherData data={data} />
            </div>
        )
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    }),
}

export default ForecastItem
