import React from 'react';
import {Badge} from "reactstrap";

export default [
    {
        name: 'visuel',
        label: 'Visuel',
        options: {
            filter: false,
            sort: false
        }
    },
    {
        name: 'name',
        label: 'Libelle',
        options: {
            filterType: "textField",
        }

    },
    {
        name: 'type',
        label: 'Type'
    },

    {
        name: 'titre',
        label: 'Titre'
    },

    {
        name: 'startValidity',
        label: 'Date début'
    },

    {
        name: 'endValidity',
        label: 'Date fin'
    },
    {
        name: 'active',
        label: 'Activée',
        options: {
            sort: false,
            customBodyRender: v => v ? <Badge color="success">Oui</Badge> : <Badge color="danger">Non</Badge>
        }
    },
];
