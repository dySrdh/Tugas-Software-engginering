import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <header className={styles.bannerframe1Parent}>
        <div className={styles.bannerframe1} />
        <div className={styles.banner}>
          <img
            className={styles.banner11Icon}
            loading="lazy"
            alt=""
            src="/banner1-1@2x.png"
          />
          <img
            className={styles.banner2Icon}
            loading="lazy"
            alt=""
            src="/banner2@2x.png"
          />
          <img
            className={styles.banner3Icon}
            loading="lazy"
            alt=""
            src="/banner3@2x.png"
          />
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
