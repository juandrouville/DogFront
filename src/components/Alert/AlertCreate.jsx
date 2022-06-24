import React from 'react';
import { Link } from 'react-router-dom';

function AlertCreate(){
    return (
        <div className="alert">
            <h1>You can create your dog !</h1>
            <Link to="/create" className="link">Go create !</Link>
        </div>
    );
};

export default AlertCreate;