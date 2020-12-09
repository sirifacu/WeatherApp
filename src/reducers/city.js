import { SET_CITY } from '../actions'

export const city = (state = {}, action) => { // el " = {} " se agrega para agregarle un estado por defecto al state
    switch (action.type) {
        case SET_CITY:
            return action.payload // igual a { ...state, city: action.payload }
        default:
            return state;
    }
}