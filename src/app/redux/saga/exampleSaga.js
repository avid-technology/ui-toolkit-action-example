import {take, put, all, fork} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

export function* example() {
    while (true) {
        try {
            const {payload} = yield take(actionTypes.EXAMPLE_ACTION);
            yield put({type: actionTypes.EXAMPLE_ACTION_IN_PROGRESS});
            yield put({type: actionTypes.EXAMPLE_ACTION_SUCCESS, payload: payload});
        } catch (e) {
            console.error(e);
            yield put({type: actionTypes.EXAMPLE_ACTION_FAILED, error: e});
        }
    }
}

export default function* exampleSaga() {
    yield all([
        fork(example),
    ]);
}
