import React from 'react';
import administrationRoutes from "./modules/Administration/routes/routes";
import particuliersRoutes from "./modules/Particuliers/routes/routes";
import entreprisesRoutes from "./modules/Entreprises/routes/routes";
import routes from "./modules/Actions/routes/routes";

export default [
    ...administrationRoutes,
    ...particuliersRoutes,
    ...routes,
    ...entreprisesRoutes
];

