import {FAILURE, SUCCESS} from "../actions/actionTypes";
import {isArray, set} from 'lodash';
export const createInitialState = () => ({data:[], one:{}, loading:false, error:false});

export const createReducer = (path, type) => ({
    [type]: (state)=>{
        set(state, path, {data:[], one:{}, loading:true, error:false});
        return {...state};
        },
    [SUCCESS(type)]: (state, {data})=>{
        set(state, path, {data:isArray(data)? data:[], one: !isArray(data)? data: {} , loading:false, error:false});
        return {...state};
    },
    [FAILURE(type)]: (state, {data})=>{
        set(state, path, {data:[], one:{}, loading:false, error:data});
        return {...state};
        },
});

export const createCallReducer = (initialState, handlers) => (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(handlers, action.type)? handlers[action.type](state, action): state;

