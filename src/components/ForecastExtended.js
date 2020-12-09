import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css'

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} />
    ))
}

const renderProgress = () => {
    return  (<div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only mx-auto"></span>
                </div>
            </div>)
}

const ForecastExtended = ({ city, forecastData }) => (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para</h2>
                <h2 className="forecast-title">{city}</h2>
                { forecastData ? 
                renderForecastItemDays(forecastData) : 
                renderProgress()}
            </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array,
}

export default ForecastExtended
