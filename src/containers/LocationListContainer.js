import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LocationList from '../components/LocationList';
import { getCitiesWeather } from '../reducers'
import {setWeather, setSelectedCity} from '../actions';


export function LocationListContainer () {
    const dispatch = useDispatch()
    const citiesWeather = useSelector(state => getCitiesWeather(state))
    const cities = useSelector(state => state.citiesList)

    useEffect(() => {
        dispatch(setWeather(cities))
        // eslint-disable-next-line
    }, [cities])    


    const handleSelectedLocation = city => {
        console.log('handleSelectionLocation ' + city);
        dispatch(setSelectedCity(city))
    }

    return (
        <LocationList onSelectedLocation={handleSelectedLocation} cities={citiesWeather} />
    )
}


export default LocationListContainer;
