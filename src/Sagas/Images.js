import {call, select, put, takeEvery} from 'redux-saga/effects';
import fetchImages from '../Api/api';


const getNextPage = state => state.nextPage;
const isLoading = state => state.isLoading;

function* loadImages() {
    try {
        const page = yield select(getNextPage);
        const loading = yield select(isLoading);

        if(!loading) {
            yield put({
                type : 'LOADING_IMAGES'
            });
            const payload = yield call(fetchImages, page);
            if(payload && payload.length > 0) {
                yield put({
                    type : 'LOAD_IMAGES',
                    payload
                });
                yield put({
                    type : 'LOADING_IMAGES_SUCCESSFULL'
                });
                yield put({
                    type : 'PAGE_LOAD_SUCCESS'
                });
            } else {
                yield put({
                    type : 'LOADING_IMAGES_FAILED'
                });
            }
        }
    } catch(error) {
        console.log(error);
    }
}

export default function* imagesSaga() {
    yield takeEvery('FETCH_IMAGES_REQUESTED', loadImages)
}