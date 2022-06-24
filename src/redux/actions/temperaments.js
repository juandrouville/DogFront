import axios from 'axios';

export const REQUEST_TEMPERAMENTS = 'REQUEST_TEMPERAMENTS';
export const SUCCES_TEMPERAMENTS = 'SUCCES_TEMPERAMENTS';
export const ERROR_TEMPERAMENTS = 'ERROR_TEMPERAMENTS';

export function requestTemperaments(){
    return {
        type:REQUEST_TEMPERAMENTS,
    };
};

export function succesTemperaments(response){
    return {
        type:SUCCES_TEMPERAMENTS,
        payload:response,
    };
};

export function errorTemperaments(error){
    return{
        type:ERROR_TEMPERAMENTS,
        payload:error,
    };
};

export function getTemperaments(){
    return (dispatch) => {
        dispatch(requestTemperaments());
        axios.get('http://localhost:3001/temperaments')
        .then(response => {
            dispatch(succesTemperaments(response.data))
        })
        .catch(error => {
                dispatch(errorTemperaments('Not found request'))
        })
    };
};