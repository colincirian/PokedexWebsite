import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const home = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '25px'
  };

  return (
    <div className="homepage" style={home}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="/Home">Poke Website</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-link">
              <li class="nav-link">
                <Link class="nav-link active" to="/">Home</Link>
              </li>
              <li class="nav-link">
                <Link class="nav-link" to="/sets">Sets</Link>
              </li>
              <li class="nav-link">
              <Link class="nav-link" to="/Pokedex">Pokedex</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success search-button" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
