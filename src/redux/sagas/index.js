import {call, all, put, takeLatest} from "redux-saga/effects"
import conf from "../conf"
import createRequestCall from "../services";
import {get} from 'lodash';
import {createFailureAction, createSuccessAction} from "../actions";

function* createSaga({type, params, body, onSuccess, onFailure}) {
    try {
        const {method, url} = conf.find(e => e.name === type);
        const {data} = yield call(createRequestCall, method, url, params, body);
        yield put(createSuccessAction(type)(data));
        if (onSuccess) onSuccess(data);
    } catch (err){
        const data = get(err, "response.data", err);
        yield  put(createFailureAction(type)(data));
        if(onFailure) onFailure(data);
    }
}

export default function* watchActions() {
    yield all(
        conf.map(function* watchAction(action) {
            yield takeLatest(action.name, createSaga)
        })
    );
}