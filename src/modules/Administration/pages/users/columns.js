import React from 'react';
import {Badge} from "reactstrap";

export default [
    {
        name: 'email',
        label: 'Email',
        options: {
            filterType: "textField"
        }
    },
    {
        name: 'lastName',
        label: 'Nom',
        options: {
            filterType: "textField"
        }
    },
    {
        name: 'firstName',
        label: 'Prénom',
        options: {
            filterType: "textField"
        }
    },
    {
        name: 'profile',
        label: 'Profil'
    },
    {
        name: 'fonction',
        label: 'Fonction'
    },
    {
        name: 'societe',
        label: 'Société'
    },
    {
        name: 'activee',
        label: 'Activée',
        options: {
            sort: false,
            customBodyRender: v => v ? <Badge color="success">Oui</Badge> : <Badge color="danger">Non</Badge>
        }
    }
];
