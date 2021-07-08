import axios from 'axios';
import {get} from 'lodash';
import {toast} from "react-toastify";

const instance =  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.response.use(response => response, error => {
    const status = get(error, 'response.status', undefined);
    const message = get(error, 'response.data.message', "");
    if (status >= 500) {
        toast.error('Une erreur inattendue s\'est produite lors de votre demande. Veuillez réessayer plus tard.');
    }
    if (status === 401 && message.toLowerCase().includes("jwt")) {
        console.log("HERE");
        localStorage.clear();
        toast.info("Votre session a expiré. Veuillez vous re-connecter SVP");
        window.location.href = '/login';
    }

    return Promise.reject(error);
});

export default instance;
