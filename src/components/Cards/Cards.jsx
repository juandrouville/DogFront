import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './style_cards.css';

function Cards(){
    const state = useSelector((state)=> state.dogs.dogs);
    return (
        <div className = "cards">
            {state && state.map(ele =>
            <Card
                id={ele.id}
                key={ele.id}
                name={ele.name}
                img={ele.image}
                temperaments={ele.temperaments}
            />
            )}
        </div>
    )
};

export default Cards;