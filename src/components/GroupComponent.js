import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  rectangle6,
  dummyNamaBengkelA,
  mobilLayananLayanan,
  propWidth,
  onRectangleImage4Click,
  onDummyNamaBengkel5Click,
}) => {
  const mobilLayananStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle6}
        onClick={onRectangleImage4Click}
      />
      <div className={styles.parent}>
        <img className={styles.icon} alt="" src="/6755552-2@2x.png" />
        <div className={styles.dummyNamaBengkelAParent}>
          <b
            className={styles.dummyNamaBengkel}
            onClick={onDummyNamaBengkel5Click}
          >
            {dummyNamaBengkelA}
          </b>
          <b className={styles.b}>4.8/5</b>
          <div className={styles.dummyDataAlamat}>
            Dummy data alamat bengkel
          </div>
          <div className={styles.mobilLayanan} style={mobilLayananStyle}>
            {mobilLayananLayanan}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
