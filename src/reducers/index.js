import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { city } from './city';
import { cities, getForecastDataFromCities as _getForecastDataFromCities, getCitiesWeather as _getCitiesWeather } from './cities';
import { citiesList } from './citiesList.js';

export default combineReducers({
    city,
    cities,
    citiesList
})

export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities)
//state => (_getForecastDataFromCities(state.cities, getCity(state)))

export const getCitiesWeather = createSelector (state => state.cities, _getCitiesWeather)