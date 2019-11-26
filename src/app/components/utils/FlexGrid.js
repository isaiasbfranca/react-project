import React, { Component } from 'react';

/**
 * Componente responsável pela renderização de uma linha do flex grid
 */
export class Row extends Component {
    render() {
        let { props } = this;
        let className = 'p-grid ' + props.className + ' ';

        if (props.alignment) {
            className += props.alignment;
        }
        return (
            <div className={className} onClick={this.props.onClick}>
                {props.children}
            </div>
        );
    }
}

/**
 * Componente responsável pela renderização de uma colune do flex grid
 * @param {string} span - tamanho da coluna
 * @param {string} className - Classe
 */
export class Col extends Component {
    render() {
        let { props } = this;
        let className = 'p-col-' + props.span + ' ' + props.className;

        if (props.offset) {
            className += ' p-offset-' + props.offset;
        }

        return <div className={className}>{props.children}</div>;
    }
}
