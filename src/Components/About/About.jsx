import React from "react";
import styles from './About.module.css'
function About() {
  return (
    <div className={`${styles.about} `}>
      <div className={`container ${styles.test} pt-4  d-flex justify-content-center align-items-center text-white vh-100`}>
        <div className={`about_content  mb-3 `}>
          <h2 className={`upper-text text-center pt-4 fs-1 fw-bolder `}> ABOUT COMPONENT</h2>
          
        </div>
        
        <div className={`about_icon d-flex justify-content-center align-items-center mb-3`}>
          <div className={`${styles.line} me-3`}></div>
          <i className={`fa-solid fa-star `}></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
           
       
        <div className={`about_para`}>
          <div className="container">
          <div className={`row px-5`}>
            <div className={`col-md-6 ps-md-5`}>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className={`col-md-6 pe-5`}>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default About;
