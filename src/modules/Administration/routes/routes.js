import Titres from "../pages/titres"
import TitresForm from "../pages/titres/form"
import Titre from "../pages/titres/show"

import Facturations from "../pages/societeFacturation"
import FacturationsForm from "../pages/societeFacturation/form"

import OrigineDevis from "../pages/origineDevis"
import OrigineDevisForm from "../pages/origineDevis/form"

import Offres from "../pages/offres"
import OffresForm from "../pages/offres/form"

import Users from "../pages/users"
import UsersForm from "../pages/users/form"

export default [
    {
        name: "Titres",
        path: "/administration/titres",
        exact: true,
        component: Titres
    },
    {
        name: "Ajouter un titre",
        path: "/administration/titres/ajouter",
        exact: true,
        component: TitresForm
    },
    {
        name: "Modifier un titre",
        path: "/administration/titres/modifier/:id",
        exact: true,
        component: TitresForm
    },
    {
        name: "Titre",
        path: "/administration/titres/:id",
        exact: true,
        component: Titre
    },
    {
        name: "Sociétés de facturation",
        path: "/administration/facturations",
        exact: true,
        component: Facturations
    },
    {
        name: "Ajouter une sociétés de facturation",
        path: "/administration/facturations/ajouter",
        exact: true,
        component: FacturationsForm
    },
    {
        name: "Modifier une sociétés de facturation",
        path: "/administration/facturations/modifier/:id",
        exact: true,
        component: FacturationsForm
    },
    {
        name: "Origines de devis",
        path: "/administration/originesDevis",
        exact: true,
        component: OrigineDevis
    },
    {
        name: "Ajouter une origines de devis",
        path: "/administration/originesDevis/ajouter",
        exact: true,
        component: OrigineDevisForm
    },
    {
        name: "Modifier une origines de devis",
        path: "/administration/originesDevis/modifier/:id",
        exact: true,
        component: OrigineDevisForm
    },
    {
        name: "Offres",
        path: "/administration/offres",
        exact: true,
        component: Offres
    },
    {
        name: "Ajouter un offre",
        path: "/administration/offres/ajouter",
        exact: true,
        component: OffresForm
    },
    {
        name: "Utilisateurs",
        path: "/administration/utilisateurs",
        exact: true,
        component: Users
    },
    {
        name: "Ajouter un utilisateur",
        path: "/administration/utilisateurs/ajouter",
        exact: true,
        component: UsersForm
    },
];
