import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCityToList } from '../../actions/'
import s from './SearchBar.module.css';

export default function SearchBar () {
  const [city, setCity] = useState('');

  const dispatch = useDispatch()
  const citiesList = useSelector(state => state.citiesList)
  const cities = useSelector(state => state.cities)
  console.log(citiesList)
  console.log(cities)
    return (
      <div>
        <form onSubmit={(e) => {e.preventDefault();
                                dispatch(addCityToList(city))
                                setCity('')}
                                } >
          <input  className={s.input} 
                  type="text" 
                  placeholder="Ciudad" 
                  name="city" 
                  value={city}
                  onChange={(e) => {setCity(e.target.value)}} 
                  />
          <button className={s.btn} type="submit">Agregar</button>
        </form>
      </div>
    )
};