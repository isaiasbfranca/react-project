import React, { Component } from 'react';
import { Row, Col } from '../utils/FlexGrid';
import { i18n } from '../../../locales';

export default class Forbidden extends Component {
    render() {
        return (
            <Row>
                <Col span="12" className="text-center">
                    <h1>{i18n('MESSGAGE_FORBIDDEN')}</h1>
                    <h2>{i18n('MESSAGE_USER_NOT_LOGGED_IN')}</h2>
                </Col>
            </Row>
        );
    }
}
