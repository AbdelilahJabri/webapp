import navs from "../modules/Actions/navs";

export default {
    items: [
        {
            name: 'Gestion des actions',
            url: '/actions',
            icon: 'fa fa-tasks',
            sideBarNavs: navs,
            home: '/actions/today'
        }
    ]
};
