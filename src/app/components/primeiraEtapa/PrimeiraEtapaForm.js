import React, { Component } from 'react';

import Store from '../../data/Store';
import { Fieldset } from 'primereact/fieldset';
import { i18n } from '../../../locales';
import { Row, Col } from '../utils/FlexGrid';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';

class PrimeiraEtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            genero: ''
        };
        this.store = Store;
    }

    validForm = (nome, genero) => {
        if (nome === '' || genero === '') {
            this.store.exibirMensagensErro([i18n('MESSAGE_VALID')]);
            return;
        }

        this.store.nomePersonagem = nome;
        this.store.generoPersonagem = genero;
        this.store.redirectToRoute('/segundaEtapa')
    }

    render() {
        let { nome, genero } = this.state;

        return (
            <div className="bodyCenter">
                <Fieldset legend={i18n('LABEL_PRIMEIRA_ETAPA')}>
                    <Row>
                        <Col className="label-form label-center required">
                            {i18n('LABEL_NOME_PERSONAGEM')}:
                        </Col>
                        <Col className="input">
                            <InputText
                                value={nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                                maxLength="100"
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="label-form required">
                            {i18n('LABEL_GENERO')}:
                        </Col>
                        <Col className="radioButtonPadding">
                            <RadioButton
                                value="H"
                                name="genero"
                                onChange={(e) => this.setState({ genero: e.value })}
                                checked={this.state.genero === 'H'} />
                            <label htmlFor="rb3" style={{ margin: '0px 10px 0 .5em' }} className="p-radiobutton-label">Homem</label>
                            <RadioButton
                                value="M"
                                name="genero"
                                onChange={(e) => this.setState({ genero: e.value })}
                                checked={this.state.genero === 'M'} />
                            <label htmlFor="rb3" style={{ margin: '0px 10px 0 .5em' }} className="p-radiobutton-label">Mulher</label>
                        </Col>
                    </Row>
                    <br />
                    <Row alignment="p-justify-end">
                        <Col className="p-button-filtro">
                            <Button label={i18n('LABEL_PROSSEGUIR')} onClick={() => this.validForm(nome, genero)} />
                        </Col>
                    </Row>
                </Fieldset>
            </div>
        )
    }
}

export default PrimeiraEtapaForm;