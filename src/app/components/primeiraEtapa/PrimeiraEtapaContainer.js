import React, { Component } from 'react';

import Store from '../../data/Store';
import { observer } from 'mobx-react';
import { i18n } from '../../../locales';

import PrimeiraEtapaForm from './PrimeiraEtapaForm'

class PrimeiraEtapaContainer extends Component {
    constructor() {
        super()
        this.store = Store;
    }

    /**
    * Ao montar o componente busca os dados parões para preencher o formulário
    * Caso o usuário logado seja um contribuinte busca por padrão os dados cadastrais.
    */
    componentDidMount() {
        this.store.tituloPagina = i18n('TITLE_1');
    }

    render() {
        return (
            <PrimeiraEtapaForm

            />
        )
    }

}

export default observer(PrimeiraEtapaContainer)