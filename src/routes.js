import React from 'react';
import administrationRoutes from "./modules/Administration/routes/routes";
import particuliersRoutes from "./modules/Particuliers/routes/routes";
import entreprisesRoutes from "./modules/Entreprises/routes/routes";

export default [
    ...administrationRoutes,
    ...particuliersRoutes,
    ...entreprisesRoutes
];

