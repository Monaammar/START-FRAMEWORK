import React from "react";
import avatar from "./../../IMGS/ava.png";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={`${styles.home}`}>
      <div
        className={`container ${styles.test} d-flex justify-content-center align-items-center text-white vh-100 `}
      >
        <div className={` ${styles.home_img} `}>
          <img className={`mb-3 img-fluid `} src={avatar} alt="" />
        </div>
        <div className={`home_content`}>
          <h2>START FRAMEWORK</h2>
          <div
            className={`contact_icon d-flex justify-content-center align-items-center mb-3`}
          >
            <div className={`${styles.line} me-3`}></div>
            <i className={`fa-solid fa-star `}></i>
            <div className={`${styles.line} ms-3`}></div>
          </div>
          <div className={`home_para`}>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
