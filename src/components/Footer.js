import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <img className={styles.footerChild} alt="" src="/rectangle-5.svg" />
      <div className={styles.decisionMaker}>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.outputTransformer}>
        <div className={styles.delayer}>
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
    </section>
  );
};

export default Footer;
