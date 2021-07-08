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
                src={v && v.filePath ? process.env.REACT_APP_API_URL + "/media/" + v.filePath : require('../../../../assets/images/noImage.jpg')}
                alt="Visuel"
                width="100"
            />)
        }
    },
    {
        name: 'nom',
        label: 'Libellé'
    },
    {
        name: 'canalVente',
        label: 'Canal de vente'
    },
    {
        name: 'origine',
        label: 'Origine de l’information'
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
