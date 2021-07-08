import React from 'react';
import {Badge} from "reactstrap";

export const columns = [
    {
        name: 'visuel',
        label: 'Visuel',
        options: {
            filter: false,
            sort: false,
            customBodyRender: v => (<img
                src={process.env.REACT_APP_API_URL + "/media/" + v.filePath}
                alt="Visuel"
                width="100"
            />)
        }
    },
    {
        name: 'libelle',
        label: 'Libellé'
    },
    {
        name: 'code',
        label: 'Code'
    },
    {
        name: 'enabled',
        label: 'Activée',
        options: {
            sort: false,
            customBodyRender: v => v ? <Badge color="success">Oui</Badge> : <Badge color="danger">Non</Badge>
        }
    },
];

export const editionsColumns = [
    {
        name: 'visuel',
        label: 'Visuel',
        options: {
            filter: false,
            sort: false,
            customBodyRender: v => (<img
                src={process.env.REACT_APP_API_URL + "/media/" + v.filePath}
                alt="Visuel"
                width="100"
            />)
        }
    },
    {
        name: 'nom',
        label: 'Nom'
    },
    {
        name: 'enabled',
        label: 'Activée',
        options: {
            sort: false,
            customBodyRender: v => v ? <Badge color="success">Oui</Badge> : <Badge color="danger">Non</Badge>
        }
    },
];
