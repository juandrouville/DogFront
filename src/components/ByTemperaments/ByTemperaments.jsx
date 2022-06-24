import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getByTemperaments } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './style_ByTemperaments.css';


function ByTemperaments({match}){
    const dispatch = useDispatch();
        useEffect(()=>{
            const temperament = match.params.temperamentName;
            dispatch(getByTemperaments(temperament));
    },[])
    
    const state = useSelector((state)=> state.dogs);
    return(
        <div>
            <NavBar/>
            <div className="home">
                {state.loading && <Loading/>}
                {state.dogs && state.dogs.length !== 0 && <Cards/>}
                {state.error !== '' && <Error/>}
            </div>   
        </div>
            
    );
};

export default ByTemperaments;