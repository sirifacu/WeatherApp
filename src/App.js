import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import Navbar from './components/Navbar/';


class App extends Component {
   

    render(){
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                                <Navbar onSearch={this.onSearch} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationListContainer />
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="shadow-lg p-3 mb-5 detail">
                                <ForecastExtendedContainer />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App
