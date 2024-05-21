import styles from "./BengkelVerticalA.module.css";

const BengkelVerticalA = ({
  rectangle8,
  dummyNamaBengkelA,
  mobilLayananLayananLayana,
  onRectangleImageClick,
  onDummyNamaBengkelClick,
}) => {
  return (
    <div className={styles.bengkelverticala}>
      <img
        className={styles.bengkelverticalaChild}
        loading="lazy"
        alt=""
        src={rectangle8}
        onClick={onRectangleImageClick}
      />
      <div className={styles.dummyNamaBengkelAParent}>
        <b
          className={styles.dummyNamaBengkel}
          onClick={onDummyNamaBengkelClick}
        >
          {dummyNamaBengkelA}
        </b>
        <div className={styles.parent}>
          <b className={styles.b}>4.8/5</b>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/6755552-1@2x.png"
          />
        </div>
        <div className={styles.dummyDataAlamatBengkelLorParent}>
          <div className={styles.dummyDataAlamat}>
            Dummy data alamat bengkel, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
          <div className={styles.mobilLayanan}>{mobilLayananLayananLayana}</div>
        </div>
      </div>
    </div>
  );
};

export default BengkelVerticalA;
