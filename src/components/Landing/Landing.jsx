import React from 'react';
import { Link } from 'react-router-dom';
import './style_landing.css';


function Landing(){
    
    return(
        <div className= "landing">
            <h1 className = "text"> ! WELCOME PUPPY ! </h1>
            <Link to = '/home' className="linkTo">GO!</Link>
        </div>
    );
};

export default Landing;