import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from './Reducers/rootReducer';
import rootSaga from "./Sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    store.dispatch({
        type : 'FETCH_IMAGES_REQUESTED'
    })
    return store;
};

export default configureStore;