import React, { Component } from 'react';

import Store from '../../data/Store';
import { Row, Col } from '../utils/FlexGrid';
import { i18n } from '../../../locales';

export default class Home extends Component {
    constructor() {
        super();
        this.store = Store;
        this.store.tituloPagina = i18n('TITLE_WELCOME');
    }

    render() {
        return (
            <Row>
                <Col span="12" className="text-center" />
            </Row>
        );
    }
}
