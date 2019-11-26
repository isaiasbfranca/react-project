import { extendObservable } from 'mobx';
import Dispatcher from './Dispatcher';

/**
 * Store de dados
 * Manipulada através do flux ao receber dados das requisições HTTP realizadas pela classe Actions
 */
class Store {
    constructor() {
        this.execute();

        /**
         * Declaração da variáveis observáveis
         * Ao atualizar uma variável observável todos os componente que a observam iram automaticamente receber os novos valores
         */
        extendObservable(this, { 
            redirect: '',
            growl: '',
            loading: 0,
            tituloPagina: '',
            nomePersonagem: '',
            generoPersonagem: '',
            classePersonagem: '',
            person: '',
            selectedPerson: '',
        });
    }

    /**
     * Método genérico responsável por mostrar as mensagens de erro
     * @param {Array} erros
     */
    exibirMensagensErro(erros) {
        this.growl.show(
            erros.map(msg => {
                return { life: 8000, severity: 'error', detail: msg };
            })
        );
    }

    /**
     * Método genérico responsável por mostrar as mensagens de sucesso
     * @param {Array} sucess
     */
    exibirMensagensSucesso(sucess) {
        this.growl.show(
            sucess.map(msg => {
                return { life: 8000, severity: 'success', summary: 'Sucesso' , detail: msg };
            })
        );
    }

    /**
     * Método genérico responsável pelo redirecionamento interno da aplicação
     * @param {string} path - rota de redirecionamento
     */
    redirectToRoute = path => {
        this.redirect = path;
    };

    /**
     * Ouve as mudanças do Dispacther e realiza as ações de acordo com o tipo de requisição
     */
    execute() {
        this.dispatchToken = Dispatcher.register(action => {
            this.loading--;
            switch (action.model) {
                case 'errors':
                    let erro = typeof action.result == 'string' ? JSON.parse(action.result) : action.result;
                    if (erro.hasOwnProperty('attributes')) {
                        this.exibirMensagensErro(erro.attributes.map(msg => msg.attribute + ' - ' + msg.description));
                    } else {
                        this.exibirMensagensErro([erro.message]);
                    }
                    if (action.onError) action.onError();
                    break;
                default:
                    switch (action.type) {
                        case 'get':
                            this[action.model] = action.result;
                            break;
                        default:
                            break;
                    }
                    break;
            }
        });
    }
}
const appStore = new Store();
export default appStore;
