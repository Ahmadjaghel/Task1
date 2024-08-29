import styles from "./ContectUs.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
const ContectUs = () => {
  return (
    <div className={styles.contectsection}>
      <div className={styles.contect}>
        <div className={styles.title}>
          <div>
            <SectionTitle title="CONTACT US" />
            <h1>Get In Touch With Our Agents</h1>
          </div>
          <div className={styles.plan}>
            <div className={styles.contectimg}>
              <img src="/images/property-05.jpg" alt="" />
              <div className={styles.contectinfo}>
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
      </div>
    </div>
  );
};
export default ContectUs;
