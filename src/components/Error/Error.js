import React from "react";
import img from '../../img/404.png';
import './error_style.css';

function Error(){
    return (
        <div className="error">
            <div>
                <img src={img} alt="Not found"/>
            </div>
        </div>
    )
};

export default Error;