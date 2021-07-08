import Header from "../Header";
import React, {useEffect, useState} from "react";
import headerNavs from "../headerNavs";
import SideBar from "../SideBar";
import Container from "../Container";

const AppWrapper = ({history, user, getConnectedUser}) => {
    const [activeModule, setActiveModule] = useState(headerNavs.items[0]);
    useEffect(() => {
        headerNavs.items.forEach((nav) => {
            if (history.location.pathname.includes(nav.url)) onActiveModuleChange(nav);
        });
    }, []);
    const onActiveModuleChange = (module) => {
        setActiveModule(module);
    };

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

export default AppWrapper;
