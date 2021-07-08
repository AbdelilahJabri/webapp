import React from "react";
import {Route} from "react-router-dom";

export const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;

    const RenderRedirect = (props) => {
        return <Component {...props} />;
    };

    if (!Component)
        throw new Error(
            `A component needs to be specified for private route for path ${
                rest.path
            }`
        );

    return <Route {...rest} render={() => {
        return <RenderRedirect {...props} />;
    }} />;
};


export default PrivateRoute;
