import { fork } from 'redux-saga/effects';
import imagesSaga from './Images';

export default function* rootSaga() {
    yield fork(imagesSaga)
}
