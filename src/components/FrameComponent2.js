import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.breadcrumbItemX}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/3033143-1@2x.png"
            />
            <div className={styles.usernameWrapper}>
              <b className={styles.username}>Username</b>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/6755552-11@2x.png"
          />
          <img
            className={styles.icon2}
            loading="lazy"
            alt=""
            src="/6755552-11@2x.png"
          />
          <img
            className={styles.icon3}
            loading="lazy"
            alt=""
            src="/6755552-11@2x.png"
          />
          <img
            className={styles.icon4}
            loading="lazy"
            alt=""
            src="/6755552-11@2x.png"
          />
          <img
            className={styles.icon5}
            loading="lazy"
            alt=""
            src="/6755552-11@2x.png"
          />
        </div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
        <div className={styles.loremIpsumDolorContainer}>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vestibulum
          </p>
          <p
            className={styles.semUtAccumsan}
          >{`sem ut accumsan ullamcorper. Cras sed cursus purus. Morbi ante mi, `}</p>
          <p
            className={styles.interdumAtNulla}
          >{`interdum at nulla non, eleifend tincidunt nunc. Nullam sit amet orci mi. `}</p>
          <p
            className={styles.praesentLacusOdio}
          >{`Praesent lacus odio, condimentum vel mauris vitae, fermentum laoreet nunc. `}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
