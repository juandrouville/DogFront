import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogs } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Filter from '../Filter/Filter';
import './style_home.css';


function Home(){
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getDogs());
    },[])
    
    const state = useSelector((state)=> state.dogs);
    return(
        <div>
            <NavBar/>
            <Filter/>
            <div className="home">
                {state.loading && <Loading/>}
                {state.dogs.length !== 0 && <Cards/>}
                {state.error !== '' && <Error/>}
            </div>
            <div>
                <Pagination/>
            </div>    
        </div>
            
    );
};

export default Home;