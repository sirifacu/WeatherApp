import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class Location extends Component {

    render(){
        const {city} = this.props // destructuring 
        return (
            <div className="locationCont">
                <h1>{city}</h1>
            </div>
        )
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location