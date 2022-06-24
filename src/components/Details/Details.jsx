import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsDog } from '../../redux/actions/dogs';
import NavBar from '../NavBar/NavBar';
import './details_style.css';


function Details({match}){
    const dispatch = useDispatch();
    useEffect(()=>{
        const dogId = match.params.dogId;
        console.log(dogId);
        dispatch(getDetailsDog(dogId));
    },[]);
    const state = useSelector((state)=>state.dogs.dogs);
    console.log(state.temperaments);
    return (
        <div>
            <NavBar/>
                <div className="details">
                    <div className="card-details">
                        <img src={state.image} alt=""/>
                        <h3>{state.name}</h3>
                            <div className="container-info">
                                <div className="temperaments">
                                    {state.temperaments && state.temperaments.map(ele => 
                                    <h5>{ele.name}</h5>)}
                                </div>
                                <div className="info" >
                                    <h5>Weight : {state.weight_min} Kg - {state.weight_max} Kg</h5>
                                    <h5>Life : {state.life} </h5>
                                    <h5>Height : {state.height}</h5>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    );
};
                                    
                                    

export default Details;