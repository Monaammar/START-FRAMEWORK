import React from "react";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className={`${styles.contact} `}>
      <div
        className={`container ${styles.test} d-flex justify-content-center align-items-center vh-100 mb-4 pt-4 `}
      >
        <div className={`contact_content`}>
          <h2 className={`upper-text text-center fs-1 fw-bolder   pt-5`}>
            
            CONATCT SECTION
          </h2>
        </div>

        <div
          className={`contact_icon d-flex justify-content-center align-items-center mb-3`}
        >
          <div className={`${styles.line} me-3`}></div>
          <i className={`fa-solid fa-star `}></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
        <form className={`w-50`}>
          <div class="mb-3">
            <label for="Inputtext" class="form-label">
              userName
            </label>
            <input
              type="text"
              class="form-control"
              id="InputName"
              aria-describedby="text"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              userAge
            </label>
            <input type="Number" class="form-control" id="InputNumber" />
          </div>
          <div class="mb-3">
            <label for="InputEmail1" class="form-label">
              userEmail
            </label>
            <input type="email" class="form-control" id="InputEmail" />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">
              userPassword
            </label>
            <input type="password" class="form-control" id="InputPassword" />
          </div>

          <button type="submit" className={`${styles.btn} text-white `}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
