import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {

    let location = useLocation();
    let locationPath = location.pathname;

    const handleLoginClick = () => {
        props.setShowSignup(true);
        props.setShowLogin(false);
        props.setShowLogout(false);
    };

    const handleSignupClick = () => {
        props.setShowSignup(false);
        props.setShowLogin(true);
        props.setShowLogout(false);
    };

    const handleLogoutClick = () => {
        props.setShowSignup(true);
        props.setShowLogin(false);
        props.setShowLogout(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ color: "#B5C18E" }} to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${(locationPath === '/') ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${(locationPath === '/about') ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {props.showLogin && (
                        <Link
                            to="/login"
                            style={{ padding: "6px", width: "100px", backgroundColor: "#B5C18E", color: "black" }}
                            className="btn mx-2 btn-lg active"
                            role="button"
                            aria-pressed="true"
                            onClick={handleLoginClick}
                        >
                            Login
                        </Link>
                    )}
                    {props.showSignup && (
                        <Link
                            to="/signup"
                            style={{ padding: "6px", width: "100px", backgroundColor: "#B5C18E", color: "black" }}
                            className="btn mx-2 btn-lg active"
                            role="button"
                            aria-pressed="true"
                            onClick={handleSignupClick}
                        >
                            SignUp
                        </Link>
                    )}
                    {props.showLogout && (
                        <Link
                            to="/login"
                            style={{ padding: "6px", width: "100px", backgroundColor: "#B5C18E", color: "black" }}
                            className="btn mx-2 btn-lg active"
                            role="button"
                            aria-pressed="true"
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
