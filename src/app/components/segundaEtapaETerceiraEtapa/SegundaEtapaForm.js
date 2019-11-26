import React, { Component } from 'react';

import Store from '../../data/Store';
import { Fieldset } from 'primereact/fieldset';
import { i18n } from '../../../locales';
import { Row, Col } from '../utils/FlexGrid';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import TerceiraEtapaForm from './TerceiraEtapaForm';
import ShowComponent from '../utils/ShowComponent';

class SegundaEtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classe: ''
        };
        this.store = Store;
    }

    validForm = (classe) => {
        if (classe === '') {
            this.store.exibirMensagensErro([i18n('MESSAGE_VALID')]);
            return;
        }

        this.store.classePersonagem = classe;
        this.store.redirectToRoute('/quartaEtapa')
    }

    render() {
        let { classe } = this.state;
        return (
            <div className="bodyCenter">
                <Fieldset legend={i18n('LABEL_SEGUNDA_ETAPA')}>
                    <Row>
                        <Col className="label-form required">
                            {i18n('LABEL_CLASSE')}:
                    </Col>
                        <Col className="radioButtonPadding">
                            <RadioButton
                                value="jedi"
                                name="classe"
                                onChange={(e) => this.setState({ classe: e.value })}
                                checked={classe === 'jedi'} />
                            <label htmlFor="rb3" style={{ margin: '0px 10px 0 .5em' }} className="p-radiobutton-label">Jedi</label>
                            <RadioButton
                                value="sith"
                                name="classe"
                                onChange={(e) => this.setState({ classe: e.value })}
                                checked={classe === 'sith'} />
                            <label htmlFor="rb3" style={{ margin: '0px 10px 0 .5em' }} className="p-radiobutton-label">Sith</label>
                        </Col>
                    </Row>
                    <br />
                    <ShowComponent case={classe !== ''}>
                        <TerceiraEtapaForm
                            genero={this.store.generoPersonagem}
                            classe={classe} />
                    </ShowComponent>
                    <br />
                    <ShowComponent case={classe === ''}>
                        <Row alignment="p-justify-center">
                            <Col className="p-button-filtro">
                                <Button label={i18n('LABEL_VOLTAR')} onClick={() => this.store.redirectToRoute('/')} />
                            </Col>
                        </Row>
                    </ShowComponent>
                </Fieldset>
            </div>)
    }
}

export default SegundaEtapaForm;