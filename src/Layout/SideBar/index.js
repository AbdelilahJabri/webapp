import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const SideBar = ({activeModule, history}) => {
    const [activeSubModule, setActiveSubModule] = useState(activeModule.sideBarNavs[0]);
    useEffect(() => {
            activeModule.sideBarNavs.forEach((nav) => {
                if (history.location.pathname.includes(nav.url)) setActiveSubModule(nav);
            });
        }
        , [activeModule]
    );
    return (
        <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
                <div className="logo-src"/>
                <div className="header__pane ml-auto">
                    <div>
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"/>
                                    </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="app-header__mobile-menu">
                <div>
                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"/>
                                </span>
                    </button>
                </div>
            </div>
            <div className="app-header__menu">
                        <span>
                            <button type="button"
                                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6"/>
                                </span>
                            </button>
                        </span>
            </div>
            <div className="scrollbar-sidebar">
                <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu mt-3">
                        {
                            activeModule.sideBarNavs.map((nav, i) => (
                                <li className="mb-2" key={i}
                                    onClick={() => setActiveSubModule(nav)}
                                >
                                    <NavLink className={"mm" + (nav === activeSubModule ? "-active" : "")}
                                             to={nav.url}>
                                        <i className={"metismenu-icon " + nav.icon}> </i>
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;