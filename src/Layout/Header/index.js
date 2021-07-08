import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";


const Header = ({history, navs, activeModule, onActiveModuleChange}) => {
    const logout = () => {
        console.log("ir chi haja")
        history.push("/login");
    };
    return (
        <div className="app-header header-shadow">
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
            <div className="app-header__content">
                <div className="app-header-right">
                    <ul className="header-menu nav">
                        {
                            navs.items.map((nav, i) => (
                                    <li className="nav-item" key={i}
                                        onClick={() => onActiveModuleChange(nav)}
                                    >
                                        <NavLink className={"nav-link" + (nav === activeModule ? " nav-link-active " : " ")}
                                                 to={nav.home ? nav.home : nav.url}>
                                            <i className={"nav-link-icon" + (nav === activeModule ? " nav-link-active " : " ") + nav.icon}> </i>
                                            {nav.name}
                                        </NavLink>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="header-btn-lg cursor-header pr-0">
                        <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left  ml-3 header-user-info" data-toggle="dropdown"
                                     aria-haspopup="true" aria-expanded="false">
                                    <div className="widget-heading">
                                        GMAO
                                        <i className="fa fa-angle-down ml-2 opacity-8"/>
                                    </div>

                                    <div tabIndex="-1" role="menu" aria-hidden="true"
                                         className="dropdown-menu dropdown-menu-right">
                                        <button type="button" className="dropdown-item">Retour</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
