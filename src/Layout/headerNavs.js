import entreprisesNavs from "../modules/Entreprises/navs";
import administrationNavs from "../modules/Administration/navs";
import particuliersNavs from "../modules/Particuliers/navs";

export default {
    items: [
        {
            name: 'Entreprises',
            url: '/entreprises',
            icon: 'fa fa-building',
            sideBarNavs: entreprisesNavs,
            home: '/entreprises/simulateur',
            permissions: 'entreprises.manageEntreprises'
        },
        {
            name: 'Particuliers',
            url: '/particuliers',
            icon: 'fa fa-users',
            sideBarNavs: particuliersNavs,
            home: '/particuliers/bons-commande',
            permissions: 'particuliers.manageParticuliers'
        },
        {
            name: 'Administration',
            url: '/administration',
            icon: 'fa fa-cog',
            sideBarNavs: administrationNavs,
            home: '/administration/titres',
            permissions: 'administration.manageAdministration'
        },
    ]
};
