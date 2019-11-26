import React, { Component } from 'react';

import Store from '../../data/Store';
import { Fieldset } from 'primereact/fieldset';
import { i18n } from '../../../locales';
import { Row, Col } from '../utils/FlexGrid';

import sith from '../../../assets/img/sith.svg'
import jedi from '../../../assets/img/jedi.svg'

class QuartaEtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = Store;
    }



    render() {
        let { nome, person } = this.props;
        console.log(person);
        
        return (
            <div className="bodyCenter">
                <Fieldset legend={i18n('LABEL_QUARTA_ETAPA')}>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>{i18n('TITLE_WELCOME')} {nome}</h1>
                    <Row>
                        <Col span="5" className="label-form">
                            <img src={person && person.allegiance === 'sith' ? sith : jedi} alt="" style={{ width: '10em' }} />
                        </Col>
                        <Col span="7">
                            <Row>
                                <Col span="2" className="label-form">
                                    {i18n('LABEL_VISUALIZAR_NOME_PERSONAGEM')}:
                            </Col>
                                <Col span="8">
                                    <label>{nome}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="2" className="label-form">
                                    {i18n('LABEL_PERSONAGEM')}:
                            </Col>
                                <Col span="8">
                                    <label>{person && person.name}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="2" className="label-form">
                                    {i18n('LABEL_VISUALIZAR_GENERO')}:
                            </Col>
                                <Col span="8">
                                    <label>{person && person.gender}</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="2" className="label-form">
                                    {i18n('LABEL_ALIANCA')}:
                            </Col>
                                <Col span="8">
                                    <label>{person && person.allegiance}</label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Fieldset>
            </div>
        )
    }
}

export default QuartaEtapaForm;