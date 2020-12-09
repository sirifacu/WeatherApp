import {ADD_CITY_TO_LIST} from '../actions/'

export const citiesList = (state = [], action) => {
    switch(action.type){
        case ADD_CITY_TO_LIST:
            return [...state, action.payload]
        default:
            return state;
    }
}




// citiesList: ['Gualeguaychú', 'Washington DC, US', 'Ciudad de México, MX', 'Madrid, ES']