import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <span className="navbar-brand font-weight-bolder">Administrator</span>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span ><i className="fas fa-bars fa-lg text-dark"></i></span>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  activeClassName="active_class" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  activeClassName="active_class" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            <div className="sidenav-menu-heading">Core</div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards"
                                ><div className="nav-link-icon"><i data-feather="activity"></i></div>
                                Dashboards
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div
                            ></a>
                            <div className="collapse" id="collapseDashboards" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    <a className="nav-link" href="index.html">Default</a><a className="nav-link" href="dashboard-2.html">Multipurpose<span className="badge badge-primary ml-2">New!</span></a
                                    ><a className="nav-link" href="dashboard-3.html">Affiliate<span className="badge badge-primary ml-2">New!</span></a>
                                </nav>
                            </div>
                            <div className="sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts"
                                ><div className="nav-link-icon"><i data-feather="layout"></i></div>
                                Layout
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div
                            ></a>
                            <div className="collapse" id="collapseLayouts" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a><a className="nav-link" href="layout-dark.html">Dark Sidenav</a><a className="nav-link" href="layout-rtl.html">RTL Layout</a
                                    >
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">An Iniciative By</div>
                            <div className="sidenav-footer-title">Haryanvi Developer</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid mt-n10">
                      <router-view></router-view>
                    </div>
                </main>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                &#xB7;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      </>
    );
}
export default Navbar;