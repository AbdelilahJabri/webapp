import createAction from "./actions";
import {createCallReducer, createInitialState, createReducer} from "./reducers";
import conf from "./conf";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as form } from 'redux-form';

import {set} from 'lodash';
import sagas from "./sagas";
export let reducers = {};
export const actions = {};
export const initialState = {};

const generateRedux = (e) => {
    set(actions, e.reducerPath, createAction(e.name));
    set(initialState, e.reducerPath, createInitialState());
    reducers = {...reducers, ...createReducer(e.reducerPath, e.name)}
};


conf.forEach(generateRedux);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({app: createCallReducer(initialState, reducers), form}), composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

export default store;