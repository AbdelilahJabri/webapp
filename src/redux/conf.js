import {GET, POST} from "./actions/actionTypes";
import {LOGIN, USER, TITRES, OFFRES, SOCIETE_FACTURATIONS, ORIGINE_DEVIS} from "./actions/constants";
import {createCrudActions} from "./actions";

export default [
    {
        name: POST(LOGIN),
        url: "/authentication_token",
        reducerPath: "auth",
        method:"POST",
    },
    {
        name: GET(USER),
        url: "/api/currentUser",
        reducerPath: "user",
        method:"GET",
    },
    ...createCrudActions(TITRES),
    ...createCrudActions(OFFRES),
    ...createCrudActions(SOCIETE_FACTURATIONS),
    ...createCrudActions(ORIGINE_DEVIS),
]
