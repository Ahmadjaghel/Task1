import React from "react";
import SectionTitle from "../HomeComponents/SectionTitle/SectionTitle";
import styles from "./MainContact.module.css";
const MainContact = () => {
  return (
    <div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <SectionTitle title="CONTACT US" />
            <h1>Get In Touch With Our Agents</h1>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cum
            in dolorem assumenda non necessitatibus alias neque molestiae qui
            enim incidunt sit ab aliquid nesciunt minima expedita, totam dolor
            quidem.
          </p>
          <div>
            <img src="/images/phone-icon.png" alt="" />
            <div className={styles.phonnumber}>
              <h5>010-020-0340</h5>
              <p>Phone Number</p>
            </div>
          </div>
          <div>
            <img src="/images/email-icon.png" alt="" />
            <div className={styles.phonnumber}>
              <h5>info@villa.co</h5>
              <p>Business Email</p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Your Name..." />
            <label htmlFor="name">Email Adress</label>
            <input type="text" placeholder="Your Email..." />
            <label htmlFor="name">Subject</label>
            <input type="text" placeholder="Subject..." />
            <label htmlFor="name">Message</label>
            <textarea type="text" placeholder="Your Message..." />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
