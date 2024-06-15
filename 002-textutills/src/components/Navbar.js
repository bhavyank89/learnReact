import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">{props.navTitle}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">{props.homeTitle}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">{props.aboutTitle}</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">{props.searchTitle}</button>
                        </form>
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    navTitle: PropTypes.string.isRequired,
    homeTitle: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired,
    searchTitle: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
    navTitle: "Set title here",
    homeTitle: "Home title here",
    aboutTitle: "About title here",
    searchTitle: "Search title here",
};
