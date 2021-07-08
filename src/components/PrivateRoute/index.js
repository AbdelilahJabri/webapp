import React from "react";
import {Redirect, Route} from "react-router-dom";
import {isEmpty} from "lodash";

export const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;

    const RenderRedirect = (props) => {
        return !isEmpty(props.user) ? <Component {...props} /> : <Redirect to="/login" />;
    };

    /*const RenderRedirect = (props) => {
        return <Component {...props} />;
    };*/

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
