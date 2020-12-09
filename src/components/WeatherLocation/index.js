import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Location from './Location'
import WeatherData from './WeatherData'

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        { data ? <WeatherData data={data}/> : 
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>}
    </div>
)

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation