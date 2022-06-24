import React from 'react';
import './style_pagination.css';
import { getNextPage,getPrevPage } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { animateScroll as scroll} from 'react-scroll';

function Pagination(){
    const dispatch = useDispatch();
    const page = useSelector((state) => state.dogs.page);
    const onClickUp = () => {
        scroll.scrollToTop();
    }
    return (
        <div className="pagination">
            <button onClick = {()=>{
                if(page !==0){
                    dispatch(getPrevPage(page -1));
                }
                onClickUp();   
            }}> Previus </button>
            <button  onClick = {()=>{
                onClickUp();
                dispatch(getNextPage(page+1));
            }}> Next </button>
        </div>
    );
};



export default Pagination;