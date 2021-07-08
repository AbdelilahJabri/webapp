import {DELETE, FAILURE, GET, LIST, PATCH, POST, PUT, SUCCESS} from "./actionTypes";

const createAction = (type) => {
    return (params, body, onSuccess, onFailure) => ({
        type,
        params,
        body,
        onSuccess,
        onFailure
    })
};
const createActionWithoutBody = (type) => {
    return (params, onSuccess, onFailure) => ({
        type,
        params,
        onSuccess,
        onFailure
    })
};
export const createSuccessAction = (type) => (data) => ({type: SUCCESS(type), data});
export const createFailureAction = (type) => (data) => ({type: FAILURE(type), data});

export const createGetAction = (type) => createActionWithoutBody(GET(type));
export const createListAction = (type) => createActionWithoutBody(LIST(type));
export const createDeleteAction = (type) => createActionWithoutBody(DELETE(type));

export const createPutAction = (type) => createAction(PUT(type));
export const createPostAction = (type) => createAction(POST(type));
export const createPatchAction = (type) => createAction(PATCH(type));

export const createCrudActions = (resource) => ([
    {
        name: LIST(resource),
        url: `/api/${resource.toLowerCase()}`,
        reducerPath: resource.toLowerCase(),
        method: "GET",
    },
    {
        name: POST(resource),
        url: `/api/${resource.toLowerCase()}`,
        reducerPath: resource.toLowerCase(),
        method: "POST",
    },
    {
        name: GET(resource),
        url: `/api/${resource.toLowerCase()}/<%= id %>`,
        reducerPath: resource.toLowerCase(),
        method: "GET",
    },
    {
        name: DELETE(resource),
        url: `/api/${resource.toLowerCase()}/<%= id %>`,
        reducerPath: resource.toLowerCase(),
        method: "DELETE",
    },
    {
        name: PUT(resource),
        url: `/api/${resource.toLowerCase()}/<%= id %>`,
        reducerPath: resource.toLowerCase(),
        method: "PUT",
    },
    {
        name: PATCH(resource),
        url: `/api/${resource.toLowerCase()}/<%= id %>`,
        reducerPath: resource.toLowerCase(),
        method: "PATCH",
    },


]);

export default createAction;