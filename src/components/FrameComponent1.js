import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  rectangle8,
  dummyNamaBengkelC,
  motorMobilLayananLayanan,
  propPadding,
  onRectangleImage3Click,
  onDummyNamaBengkel5Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.bengkelverticalcWrapper} style={frameDivStyle}>
      <div className={styles.bengkelverticalc}>
        <img
          className={styles.bengkelverticalcChild}
          loading="lazy"
          alt=""
          src={rectangle8}
          onClick={onRectangleImage3Click}
        />
        <div className={styles.dummyNamaBengkelCParent}>
          <b
            className={styles.dummyNamaBengkel}
            onClick={onDummyNamaBengkel5Click}
          >
            {dummyNamaBengkelC}
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
            <div className={styles.motorMobil}>{motorMobilLayananLayanan}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
