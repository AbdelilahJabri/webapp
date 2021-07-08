import {template, get} from "lodash";
import axios from "../../config/axios";

const createRequestCall = (method, endpoint, params, data) => {
    const url = template(endpoint)(params);
    const query = get(params,"query");
    return axios({
        method,
        url,
        data,
        params:query
    });
};

export const postFile = (data) => {
    const config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return axios.post("/api/media_objects", data, config);
};

export default createRequestCall;