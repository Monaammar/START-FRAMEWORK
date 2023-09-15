import React from "react";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={`${styles.test} navbar navbar-expand-lg  text-white text-uppercase fw-bold fixed-top py-4   `}>
      <div class="container">
        <Link to="" className={`navbar-brand text-white fs-3`} >
          START FRAMEWORK
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className={`${styles.navItem}`}>
              <Link to="About" className= {`nav-link text-white`} > 
               About
              </Link>
            </li>
            <li className={`${styles.navItem}`}>
              <Link to="Portfolio" className= {`nav-link text-white`} >
               Portfolio
              </Link>
            </li>
            <li className={`${styles.navItem}`}>
              <Link to="Contact" className= {`nav-link text-white`} >
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
