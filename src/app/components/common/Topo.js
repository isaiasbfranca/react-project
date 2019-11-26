import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Row, Col } from '../utils/FlexGrid';
import Store from '../../data/Store';

export default class Topo extends Component {
    constructor() {
        super();
        this.store = Store;

        this.state = { };
    }


    render() {
        let { titulo, redirectPath } = this.props;
        if (redirectPath) {
            this.props.redirectToRoute('');
            return <Route render={() => <Redirect to={redirectPath} />} />;
        }

        return (
            <Row>
                <Col span="12">
                    <Row className="topo" onClick={() => this.props.redirectToRoute('/')}>
                        <Col span="7" className="text-left">
                        </Col>
                        <Col span="2" offset="1" className="text-center logo">
                        </Col>
                        <Col span="2" className="governo">
                        </Col>
                    </Row>
                    <Row className="body">
                        <Col span="12" className="titulo label-bold">
                            {titulo}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
