import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getByTemperaments } from '../../redux/actions/dogs';

import './style_card.css';

function Card({id,name,img,temperaments}){
    const dispatch = useDispatch();
    function render(name){
        dispatch(getByTemperaments(name));
    }
    return (
        <div className="card">
            <Link to= {`/details/${id}`} >
                <img src={img} alt=""/>
            </Link>
            <h3>{name}</h3>
            <div className="temperaments">
                {temperaments && temperaments.map(ele => 
                <Link to={`/temperament/${ele.name}`} className="link">
                <h5>{ele.name}</h5>
                </Link>
                )}
            </div>
        </div>
    );
};

export default Card;