import React from 'react';
import { useDispatch } from 'react-redux';
import { getByOrder } from '../../redux/actions/dogs';
import './filter-style.css';

function Filter(){

    const dispatch = useDispatch();

    function clickOrder(event){
        console.log(event.target.value);
        dispatch(getByOrder(event.target.value));
    }

    return(
        <div>
            <div className="filter">
                <button value="ASC" onClick={clickOrder} >Ascendente</button>
                <button value="DESC" onClick={clickOrder} >Descendente</button>
            </div>
        </div>
    )
                
                
}

export default Filter;