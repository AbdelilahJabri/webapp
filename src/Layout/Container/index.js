import React from 'react';
import routes from "../../routes";
import {Switch} from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";

const Container = (props) => {
    const {user, history} = props;
    return (
        <>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Switch>
                        {
                            routes.map(route =>
                                <PrivateRoute
                                    history={history}
                                    key={route.name}
                                    component={route.component}
                                    exact={route.exact}
                                    path={route.path}
                                    user={user}/>)
                        }
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Container;