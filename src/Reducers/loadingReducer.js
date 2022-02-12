const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOADING_IMAGES' : 
            return true;
        case 'LOADING_IMAGES_SUCCESSFULL' :
            return false;
        case 'LOADING_IMAGES_FAILED' :
            return false;
        default :
            return state;
    }
}

export default loadingReducer;