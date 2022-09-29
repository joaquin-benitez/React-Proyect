import React from 'react';
import { Link } from 'react-router-dom';

const LogoNavbar = () => {
    return (
        <>
            <Link className="navbar-brand link" to="/"><i className="bx bx-heart-circle" />Relax Spa</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </>
    );
}

export default LogoNavbar;
