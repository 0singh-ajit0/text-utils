import React from 'react';
import PropTypes from 'prop-types';
import logo from "../logo-256.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm" data-bs-theme={`${props.mode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} style={{ filter: "invert(20%)", transform: `scale(1.5)` }} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
					{props.title}
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className={`nav-link ${window.location.pathname === "/" ? "active" : ""}`} to={`/`}>Home</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link ${window.location.pathname === "/about" ? "active" : ""}`} to={`/about`}>{props.aboutText}</Link>
						</li>
					</ul>
					<div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3`}>
						<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
						<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
					</div>
				</div>

			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Set title here",
	aboutText: "Set about here",
};