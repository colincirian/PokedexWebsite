import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const handleSearchSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Navbar toggler button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar brand */}
                    <Link className="navbar-brand" to="/">Poke Website</Link>
                    {/* Navbar collapsible content */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        {/* Navbar links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-link">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sets">Sets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Pokedex">Pokedex</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignUp">Sign Up</Link>
                            </li>
                        </ul>
                        {/* Search form */}
                        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control me-2 search-input"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success search-button" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
