export default [
    {
        name: 'Bons de commande',
        url: '/particuliers/bons',
        icon: 'fa fa-file-invoice-dollar',
        permission: 'particuliers.bons.manageBons'
    },
    {
        name: 'Calendrier commercial',
        url: '/particuliers/calendrier',
        icon: 'fa fa-calendar',
        permission: 'particuliers.calendrier.manageCalendrier'
    },
    {
        name: 'Import réalisés ',
        url: '/particuliers/import',
        icon: 'fa fa-download',
        permission: 'particuliers.import.manageImport'
    },
    {
        name: 'Statistiques',
        url: '/particuliers/statistiques',
        icon: 'fa fa-chart-bar',
        permission: 'particuliers.statistiques.manageStatistiques'
    },
];
