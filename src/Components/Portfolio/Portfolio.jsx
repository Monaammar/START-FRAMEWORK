import React from "react";
import styles from "./Portfolio.module.css";
import first from "./../../IMGS/poert1.png"
import second from './../../IMGS/port2.png'
import third from "./../../IMGS/port3.png"

function Portfolio() {
  return (
    <div className={`${styles.portfolio}  `}>
      <div
        className={`container ${styles.test} pt-4 d-flex justify-content-center align-items-center mb-4`}
      >
        <div className={`about_content`}>
          <h2 className={` pt-4 mb-3 upper-text text-center fs-1 fw-bolder `}> PORTFOLIO COMPONENT</h2>
        </div>

        <div className={`portfolio_icon d-flex justify-content-center align-items-center mb-3`}>
          <div className={`${styles.line} me-3`}></div>
          <i className={`fa-solid fa-star `}></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <div className={`cards`}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={first} className={`rounded-3 w-100`}/>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={second} className={`rounded-3 w-100`}/>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={third} className={`rounded-3 w-100`}/>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={first} className={`rounded-3 w-100`}/>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={second} className={`rounded-3 w-100`}/>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="port_img rounded-3 overflow-hidden position-relative">
                  <img src={third} className={`rounded-3 w-100`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
