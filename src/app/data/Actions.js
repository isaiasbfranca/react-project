import 'whatwg-fetch';
import Dispatcher from './Dispatcher';
import Constants from './Constants';
import Store from '../data/Store';
import Security from './security/Security';

/**
 * Classe responsável por efetivar a chamada HTTP
 */
class HTTPRequest {
    constructor() {
        this.store = Store;
    }

    /**
     * Efetua a requisição HTTP
     * @param {string} method - Método HTTP utilizado (GET, POST, PUT, DELETE, ...)
     * @param {string} endpoint - URL da requisição
     * @param {string} model - Nome da variável observável declarada na Store de dados
     */
    execute(method, endpoint, model, onError, onSuccess) {
        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.text());
            } else {
                return Promise.reject(response.text());
            }
        }

        let send = {
            method: method,
            headers: Security.getAuthHeader({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })
        };


        this.store.loading++;

        fetch(Constants.APIRoot + endpoint, send)
            .then(status)
            .then(data => {
                if (model) {
                    Dispatcher.dispatch({
                        type: method,
                        model: model,
                        onSuccess: onSuccess,
                        result: JSON.parse(data)
                    });
                }
            })
            .catch(err => {
                if (typeof err === 'object' && err.then instanceof Function) {
                    err.then(result => {
                        Dispatcher.dispatch({
                            model: 'errors',
                            result: result,
                            onError: onError
                        });
                    });
                } else {
                    Dispatcher.dispatch({
                        model: 'errors',
                        result: err,
                        onError: onError
                    });
                }
            });
    }
}

/**
 * Classe responsável por abstrair as chamadas HTTP
 */
class Actions {
    /**
     * Método para requisições do tipo GET
     * @param {string} url - URL de requisição HTTP sem url variables
     * @param {string} model - Nome da variável observável declarada na Store de dados
     * @param {Object} params - Objeto JSON não obrigatório que será convertido em url variables.
     * @param {Function} onError - Função a ser executada no momento do erro da requisição.
     */
    get(url, model, params, onError) {
        /**
         * Caso a variável params seja preenchida o objeto enviado será convertido em url variables e concatenado na url enviada
         * Ex.: params = {apenasAtivos: true, emailConfirmado: false} -> ?apenasAtivos=true&emailConfirmado=false
         */
        if (params) {
            url += '?';
            Object.keys(params).forEach((parametro, indice) => {
                if (indice !== 0) url += '&';
                url += parametro + '=' + params[parametro];
            });
            
        }

        let request = new HTTPRequest();
        request.execute('get', url, model, null, onError);
    }

    /**
     * Método para requisições do tipo POST
     * @param {string} url - URL de requisição HTTP
     * @param {string} model - Nome da variável observável declarada na Store de dados
     * @param {Object} body - Objeto JSON que será enviado no body da request.
     */
    post(url, model, body, onError, onSuccess) {
        let request = new HTTPRequest();
        request.execute('post', url, model, body, onError, onSuccess);
    }

    /**
     * Método para requisições do tipo PUT
     * @param {string} url - URL de requisição HTTP
     * @param {string} model - Nome da variável observável declarada na Store de dados
     * @param {Object} body - Objeto JSON que será enviado no body da request.
     */
    put(url, model, body, onError, onSuccess) {
        let request = new HTTPRequest();
        request.execute('put', url, model, body, onError, onSuccess);
    }

    /**
     * Método para requisições do tipo DELETE
     * @param {string} url - URL de requisição HTTP
     * @param {string} model - Nome da variável observável declarada na Store de dados
     */
    delete(url, model) {
        let request = new HTTPRequest();
        request.execute('delete', url, model);
    }
}

const actions = new Actions();
export default actions;
