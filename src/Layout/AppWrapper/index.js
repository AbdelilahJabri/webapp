import Header from "../Header";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {isEmpty, get} from "lodash";

import headerNavs from "../headerNavs";
import SideBar from "../SideBar";
import Container from "../Container";
import Loader from "../Loader";
import {createGetAction} from "../../redux/actions";
import {USER} from "../../redux/actions/constants";

const AppWrapper = ({history, user, getConnectedUser}) => {
    const [activeModule, setActiveModule] = useState(headerNavs.items[0]);
    useEffect(() => {
        headerNavs.items.forEach((nav) => {
            if (history.location.pathname.includes(nav.url)) onActiveModuleChange(nav);
        });
        getConnectedUser()
    }, []);
    const onActiveModuleChange = (module) => {
        setActiveModule(module);
    };

    if (isEmpty(user)) return <Loader/>;

    return (
        <>
            <Header navs={headerNavs} onActiveModuleChange={onActiveModuleChange} activeModule={activeModule}
                    history={history}/>
            <div className="app-main">
                <SideBar activeModule={activeModule} history={history}/>
                <Container history={history} user={user}/>
            </div>
        </>
    )
};

export default connect(({app}) => ({user: get(app, 'user.one')}), {getConnectedUser: createGetAction(USER)})(AppWrapper);
