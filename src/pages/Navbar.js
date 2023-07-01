import React, { useState, useEffect } from "react";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" />
          <button 
            class="btn btn-outline-success" 
            type="submit">
              Search Pokemon
          </button>
        </form>
      </div>{" "}
    </nav>
  );
}

export default Navbar;
