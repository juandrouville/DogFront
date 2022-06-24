import axios from 'axios';



export const REQUEST_DOGS = 'REQUEST_DOGS';
export const SUCCES_DOGS = 'SUCCES_DOGS';
export const ERROR_DOGS = 'ERROR_DOGS';
export const RESET_DOGS = 'RESET_DOGS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIUS_PAGE = 'PREVIUS_PAGE';

export function requestDogs(){
    return {
        type:REQUEST_DOGS,
    };
};

export function succesDogs(response){
    return {
        type:SUCCES_DOGS,
        payload:response,
    };
};

export function errorDogs(error){
    return{
        type:ERROR_DOGS,
        payload:error,
    };
};

export function resetDogs(){
    return {
        type:RESET_DOGS,
    };
};

export function nextPage(page){
    return {
        type: NEXT_PAGE,
        payload: page,
    };
};

export function prevPage(page){
    return {
        type:PREVIUS_PAGE,
        payload: page,
    }
};


export function getDogs(){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get('http://localhost:3001/dogs')
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
                dispatch(errorDogs('Not found request'))
        })
    };
};

export function getNextPage(page){
    return (dispatch) => {
        dispatch(nextPage(page))
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs?page=${page}`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};

export function getPrevPage(page){
    return (dispatch) => {
        dispatch(prevPage(page))
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs?page=${page}`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};

export function searchDogName(search){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs?name=${search}`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};

export function postDog(dog){
    return (dispatch) => {
        axios.post(`http://localhost:3001/dogs`,{...dog})
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};
        
    
       

export function getDetailsDog(dogId){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs/${dogId}`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};

export function getByTemperaments(temperament){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs/temperaments/${temperament}`)
        .then(response => {
            dispatch(succesDogs(response.data[0].dogs))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};
    
export function getCreated(){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs/get/created`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};


export function getByOrder(order){
    return (dispatch) => {
        dispatch(requestDogs());
        axios.get(`http://localhost:3001/dogs?order=${order}`)
        .then(response => {
            dispatch(succesDogs(response.data))
        })
        .catch(error => {
            dispatch(errorDogs('Not found request'))
        });
    };
};
   
    
    