import styles from "./Footer1.module.css";

const Footer1 = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerChild} alt="" src="/rectangle-5.svg" />
      <div className={styles.emailTwitLogo}>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerMenu}>
          <img
            className={styles.faceIcon}
            loading="lazy"
            alt=""
            src="/face@2x.png"
          />
          <img
            className={styles.emailIcon}
            loading="lazy"
            alt=""
            src="/email@2x.png"
          />
          <img
            className={styles.twitIcon}
            loading="lazy"
            alt=""
            src="/twit@2x.png"
          />
        </div>
      </div>
      <div
        className={styles.copyright2023}
      >{`Copyright © 2023 OBENG. All Rights Reserved `}</div>
    </footer>
  );
};

export default Footer1;
