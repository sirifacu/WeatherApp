import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './styles.css';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE } from '../../../constants/weathers'

export class WeatherTemperature extends Component {


    stateToIconName = (weatherState) => {
        switch (weatherState) {
            case CLOUD:
                return "cloud";
            case CLOUDY:
                return "cloudy";
            case SUN:
                return "day-sunny";
            case RAIN:
                return "rain"
            case SNOW:
                return "snow";
            case WINDY:
                return "windy";
            case THUNDER:
                return 'day-thunderstorm';
            case DRIZZLE:
                return 'day-showers'
            default:
                return "day-sunny"
        }
    }

    render() {
        const {temperature, weatherState } = this.props
        return (
            <div className="weatherTemperatureCont">
                <WeatherIcons className="wicon" name={this.stateToIconName(weatherState)} size="4x" />
                <span className="temperature">{temperature}</span><span className="temperatureType">°C</span>
            </div>
        )
    }
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default WeatherTemperature
