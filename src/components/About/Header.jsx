import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <Link style={{ textDecoration: "none" }} className="navbar-brand" to="/">
                <div className="header ">
                    <img className="cvrLogo" src="./images/cvr.png" alt="cvrLogo" />
                    <div className="logoName">
                        <h1 className="logoHeading">CVR COLLEGE OF ENGINEERING</h1>
                        <p className="logoSubHeading">In Pursuit Of Excellence</p>
                    </div>
                    <div className="officeOfAlumniAffairs">
                        <h1>OFFICE OF ALUMNI AFFAIRS</h1>
                    </div>
                </div>
            </Link>
        
            <div className="navBarContainer container-fluid">
                <nav className="navbar navbar-expand-lg ">
                    <button className="navbar-toggler ms-auto togglertBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" id="navbarTogglerDemo01">
                            <li className="nav-item active dropdown about">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/ourTeam">Our Team</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Alumni Engagement
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/bousIqac">BOS&IQAC</Link></li>
                                    <li><Link className="dropdown-item" to="/MoUs">MoUs</Link></li>
                                    <li><Link className="dropdown-item" to="/techTalks">Tech Talks</Link></li>
                                    <li><Link className="dropdown-item" to="/exhibits">Exhibits</Link></li>
                                    <li><Link className="dropdown-item" to="/fdps">FDP's</Link></li>
                                    <li><Link className="dropdown-item" to="/alumniGallery">Alumni Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="/campusDrives">Campus Drives</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Alumni Chapters
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">India Chapter</Link></li>
                                    <li><Link className="dropdown-item" to="/">Foreign Chapters</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reunions
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/overseas">Overseas</Link></li>
                                    <li><Link className="dropdown-item" to="/onCampus">On Campus</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/wallOfFame" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wall Of Fame
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/doctorates">Doctorates</Link></li>
                                    <li><Link className="dropdown-item" to="/govtOfficials">Government Officials</Link></li>
                                    <li><Link className="dropdown-item" to="/celebrities">Celebrities</Link></li>
                                    <li><Link className="dropdown-item" to="/warble">Warble</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/alumniAwards" aria-expanded="false">
                                    Alumni Awards
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/joinUs" aria-expanded="false">
                                    Join Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/videos" aria-expanded="false">
                                    Videos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
