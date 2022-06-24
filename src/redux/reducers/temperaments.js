import {
    REQUEST_TEMPERAMENTS,
    SUCCES_TEMPERAMENTS,
    ERROR_TEMPERAMENTS,
} from '../actions/temperaments';

export const initialState = {
    loading:false,
    temperaments:[],
    error:''
};

function temperaments( state = initialState,action ){
    switch(action.type){
        case REQUEST_TEMPERAMENTS : {
            return {
                ...state,
                loading:true,
            };
        };
        case SUCCES_TEMPERAMENTS : {
            return {
                loading:false,
                temperaments:action.payload,
                error:'',
            };
        };
        case ERROR_TEMPERAMENTS : {
            return{
                loading:false,
                temperaments:[],
                error:action.payload,
            };
        };
        default: return state;
    };
};

export default temperaments;