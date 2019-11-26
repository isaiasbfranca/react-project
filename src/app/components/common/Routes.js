import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Unauthorized from './Unauthorized';
import PrimeiraEtapaContainer from '../primeiraEtapa/PrimeiraEtapaContainer';
import SegundaEtapaContainer from '../segundaEtapaETerceiraEtapa/SegundaEtapaContainer';
import QuartaEtapaContainer from '../quartaEtapa/QuartaEtapaContainer';


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                (<Component {...props} />)
            }
        />
    );
}
export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/unauthorized" component={Unauthorized} />
                <PrivateRoute exact path="/" component={PrimeiraEtapaContainer} />
                <PrivateRoute path="/segundaEtapa" component={SegundaEtapaContainer} />
                <PrivateRoute path="/quartaEtapa" component={QuartaEtapaContainer} />
            </div>
        );
    }
}
