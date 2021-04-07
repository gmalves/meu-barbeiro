import React from "react";
import "./Navbar.css";
import imgBarba from "../../assets/img/beard-icon-1.jpg";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light cor-principal">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h2 align-text-right primary">
            Meu Barbeiro
          </span>
          <img src={imgBarba} width="50" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
