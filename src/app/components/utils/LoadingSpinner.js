import React from 'react';
import loading from '../../../assets/img/ajax-loader.gif';

const LoadingSpinner = () => (
    <div className="modal-loader modal fade in show" style={{ display: 'flex' }}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <img src={loading} alt="Carregando..." />
                </div>
            </div>
        </div>
    </div>
);

export default LoadingSpinner;
