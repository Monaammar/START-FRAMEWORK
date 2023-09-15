import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer className={`${styles.foot} text-center text-lg-start text-white   `}>
        {/* Section: Links  */}
        <section className="">
          <div className={`container text-center text-md-start py-5 `}>
            {/* Grid row  */}
            <div class="row ">
              {/* Grid column  */}
              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content  */}
                <h3 class="text-uppercase fw-bold mb-4">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              {/* Middle */}
              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 ">
                <h3 class="text-uppercase fw-bold mb-4">AROUND THE WEB</h3>
                <div className={`icons text-center`}>
                  {/* Facebook  */}
                  <i className={`${styles.icon} fa-brands fa-facebook mx-1`}></i>
                  {/* Twitter  */}
                  <i className={`${styles.icon} fab fa-twitter mx-1`}></i>
                  {/* LinkedIn */}
                  <i className={` ${styles.icon} fab fa-linkedin-in mx-1`}></i> {/* WEB */}
                  <i className={` ${styles.icon} fab fa-google mx-1`}></i>
                </div>
              </div>
              {/* End Of Middle */}

              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                <h3 class="text-uppercase fw-bold mb-4">ABOUT FREELANCER</h3>
                <p class="text-center">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
              {/* Grid column  */}
            </div>
            {/* Grid row  */}
          </div>
        </section>
        {/* Section: Links   */}

        {/* Copyright */}
        <div className={`${styles.copy} text-center p-4 text-white`}>Copyright © Your Website 2021</div>
        {/* Copyright  */}
      </footer>
      {/* Footer  */}
    </>
  );
}

export default Footer;
