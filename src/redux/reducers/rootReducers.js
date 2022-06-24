import { combineReducers } from 'redux';
import dogs from './dogs';
import temperaments from './temperaments';

const rootReducer = combineReducers({
    dogs,
    temperaments,
});

export default rootReducer;