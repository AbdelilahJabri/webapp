export default [
    {
        name: 'Titres',
        url: '/administration/titres',
        icon: 'fa fa-newspaper',
        permission: 'administration.titres.manageTitres'
    },
    {
        name: 'Offres',
        url: '/administration/offres',
        icon: 'fa fa-tags',
        permission: 'administration.offres.manageOffres'
    },
    {
        name: 'Sociétés de facturation',
        url: '/administration/facturations',
        icon: 'fa fa-building',
        permission: 'administration.facturations.manageFacturations'
    },
    {
        name: 'Origines de devis',
        url: '/administration/originesDevis',
        icon: 'fa fa-file-invoice-dollar',
        permission: 'administration.originesDevis.manageOriginesDevis'
    },
    {
        name: 'Utilisateurs',
        url: '/administration/utilisateurs',
        icon: 'fa fa-users',
        permission:'administration.utilisateurs.manageUtilisateurs'
    }
];
