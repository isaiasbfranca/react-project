import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Growl } from 'primereact/growl';
import { BrowserRouter } from 'react-router-dom';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../../../assets/css/App.css';

import Routes from './Routes';
import Store from '../../data/Store';
import ShowComponent from '../utils/ShowComponent';
import LoadingSpinner from '../utils/LoadingSpinner';

import Topo from './Topo';

class CommonPage extends Component {
    constructor() {
        super();
        this.store = Store;
        this.growl = '';
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Topo
                        titulo={this.store.tituloPagina}
                        redirectPath={this.store.redirect}
                        redirectToRoute={this.store.redirectToRoute}
                    />
                    <ShowComponent case={this.store.loading}>
                        <LoadingSpinner />
                    </ShowComponent>
                    <Routes />
                    <Growl ref={el => (this.store.growl = el)} />
                </div>
            </BrowserRouter>
        );
    }
}

export default observer(CommonPage);
