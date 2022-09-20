import React from 'react';
import LogoNavbar from './Navbar/LogoNavbar';
import UlNavbar from './Navbar/ulNavbar';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <LogoNavbar/>
            <div className="collapse navbar-collapse" id="navbarColor02">
             <UlNavbar/>            
            </div>
          </div>
        </nav> 
      </>
    );
}

export default Navbar;
