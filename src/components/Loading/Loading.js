import React from 'react';
import img from "../../img/dog_loading.gif";
import './loading_style.css';

function Loading(){
    return(
        <div className="loading">
            <img src={img} alt="Loading Dog" />
        </div>
    );
};

export default Loading;