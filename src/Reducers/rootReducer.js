import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
    isLoading : loadingReducer, 
    nextPage : pageReducer,
    images : imagesReducer
});;

export default rootReducer;