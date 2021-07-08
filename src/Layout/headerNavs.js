import entreprisesNavs from "../modules/Entreprises/navs";

export default {
    items: [
        {
            name: 'Gestion des actions',
            url: '/actions',
            icon: 'fa fa-building',
            sideBarNavs: entreprisesNavs,
            home: '/entreprises/simulateur',
            permissions: 'entreprises.manageEntreprises'
        }
    ]
};
