import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

/**
 * Função responsável por adquirir o idioma utilizado.
 * Posteriormente implementar a coleta do idioma pela store.
 */
const getLanguage = () => {
    return 'pt_BR';
};

/**
 * Idiomas que o I18N irá dar suporte
 */
I18n.translations = {
    en_US: en,
    pt_BR: pt
};

/**
 * Função responsável por verificar se o idioma atual setado está sendo suportado,
 * caso negativo ele irá setar como 'en_US'
 */
const setLanguageToI18n = () => {
    const language = getLanguage();
    const iHaveThisLanguage = I18n.translations.hasOwnProperty(language);
    iHaveThisLanguage ? (I18n.locale = language) : (I18n.defaultLocale = 'pt_BR');
};

setLanguageToI18n();

export const i18n = key => I18n.t(key);
