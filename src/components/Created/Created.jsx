import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCreated } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import AlertCreate from '../Alert/AlertCreate';
import '../Home/style_home.css';


function Created(){

    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getCreated());
    },[])
    
    const state = useSelector((state)=> state.dogs);
    return(
        <div>
            <NavBar/>
            <div className="home">
                {state.loading && <Loading/>}
                {state.dogs.length !== 0 && <Cards/>}
                {state.dogs.lenght === 0 && <h1>no hay</h1>}
                {state.error !== '' && <Error/>}
            </div>
              
        </div>
            
    );
};

export default Created;