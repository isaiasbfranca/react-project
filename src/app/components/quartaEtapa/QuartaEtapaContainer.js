import React, { Component } from 'react';

import Store from '../../data/Store';
import { observer } from 'mobx-react';
import { i18n } from '../../../locales';
import QuartaEtapaForm from './QuartaEtapaForm';
// import TerceiraEtapaForm fro../segundaEtapa/TerceiraEtapaFormorm';


class QuartaEtapaContainer extends Component {
    constructor() {
        super()
        this.state = {
            person: ''
        };
        this.store = Store;
        this.service = require('../../data/services/personagemService');
        this.buscaPersonagem();
    }

    /**
    * Ao montar o componente busca os dados parões para preencher o formulário
    * Caso o usuário logado seja um contribuinte busca por padrão os dados cadastrais.
    */
    componentDidMount() {
        this.store.tituloPagina = i18n('TITLE_3');
        let _self = this;
        if(this.store.nomePersonagem === '' || this.store.generoPersonagem === ''){
            _self.store.redirectToRoute('/');
        }
    }

    buscaPersonagem = () => {
        let persons = this.service.getPeople();

        let listperson = persons.results.filter(item => item.id === this.store.person)
        this.store.selectedPerson = listperson[0]; 
    }

    render() {
        return (
            <QuartaEtapaForm
                nome={this.store.nomePersonagem}
                person={this.store.selectedPerson} />
        )
    }

}

export default observer(QuartaEtapaContainer)