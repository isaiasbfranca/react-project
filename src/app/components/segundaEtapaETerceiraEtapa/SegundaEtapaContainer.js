import React, { Component } from 'react';

import Store from '../../data/Store';
import { observer } from 'mobx-react';
import { i18n } from '../../../locales';
import SegundaEtapaForm from './SegundaEtapaForm';


class SegundaEtapaContainer extends Component {
    constructor() {
        super()
        this.store = Store;
    }

    /**
    * Ao montar o componente busca os dados parões para preencher o formulário
    * Caso o usuário logado seja um contribuinte busca por padrão os dados cadastrais.
    */
    componentDidMount() {
        this.store.tituloPagina = i18n('TITLE_2');
        let _self = this;
        if(this.store.nomePersonagem === '' || this.store.generoPersonagem === ''){
            _self.store.redirectToRoute('/');
        }
    }

    render() {
        return (
            <SegundaEtapaForm />
        )
    }

}

export default observer(SegundaEtapaContainer)