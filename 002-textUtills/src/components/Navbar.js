import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const modeText = props.webMode === "light" ? "Enable DarkMode" : "Enable LightMode";
    const navMode = props.webMode === "light" ? "light" : "dark";
    const modeInputStyle = { border: "2px solid #0d6efd" };
    const modeLabelStyle = props.webMode === "light" ? { color: "black" } : { color: "white" }

    return (

        // a tag with href alway refreshes the page
        // to prevent refreshing of page use Link and to
        <>
            <nav className={`navbar navbar-expand-lg navbar-${navMode} bg-${navMode}`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >{props.title1}</Link>
                    {/* <a className="navbar-brand" href="/">{props.title1}</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">{props.title2}</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/">{props.title2}</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">{props.title3}</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/about">{props.title3}</a> */}
                            </li>
                        </ul>
                        <div className="form-check form-switch form-check-reverse mx-3">
                            <input style={modeInputStyle} className="form-check-input" onClick={props.toggleWebMode} type="checkbox" id="flexSwitchCheckReverse" />
                            <label style={modeLabelStyle} className="form-check-label mx-2" htmlFor="flexSwitchCheckReverse">{modeText}</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    webMode: PropTypes.string.isRequired,
    toggleWebMode: PropTypes.func.isRequired,
};
