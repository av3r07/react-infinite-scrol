const imagesReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_IMAGES' : 
            return [...state, ...action.payload];
        default :
            return state;
    }
}

export default imagesReducer;