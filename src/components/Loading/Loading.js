import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="full-page-loading">
            <div className="loading">
                <Spinner animation="border" />
            </div>
        </div>
    );
};

export default Loading;
