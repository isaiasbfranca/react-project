import React, { Component } from 'react';

import Store from '../../data/Store';
import { Fieldset } from 'primereact/fieldset';
import { i18n } from '../../../locales';
import { Row, Col } from '../utils/FlexGrid';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

class TerceiraEtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = Store;
        this.service = require('../../data/services/personagemService');
    }

    validForm = (person) => {
        if (person === '') {
            this.store.exibirMensagensErro([i18n('MESSAGE_VALID')]);
            return;
        }

        this.store.person = person;
        this.store.redirectToRoute('/quartaEtapa')
    }

    render() {
        let { genero, classe } = this.props;

        let { person } = this.state;

        let persons = this.service.getPeople();

        let listperson = persons.results.filter(item => item.gender === genero && item.allegiance === classe).map(person => ({
            label: person.name,
            value: person.id
        }))



        return (
            <Fieldset legend={i18n('LABEL_TERCEIRA_ETAPA')}>
                <Dropdown
                    value={person}
                    options={listperson}
                    onChange={(e) => { this.setState({ person: e.value }) }}
                    placeholder="Selecione o personagem" />
                <br />
                <Row alignment="p-justify-between">
                    <Col className="p-button-filtro">
                        <Button label={i18n('LABEL_VOLTAR')} onClick={() => this.store.redirectToRoute('/')} />
                    </Col>
                    <Col className="p-button-filtro">
                        <Button label={i18n('LABEL_OK')} onClick={() => this.validForm(person)} />
                    </Col>
                </Row>
            </Fieldset>
        )
    }
}

export default TerceiraEtapaForm;