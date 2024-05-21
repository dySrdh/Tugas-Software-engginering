import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ rectangle5, propDisplay, propMinWidth }) => {
  const rp100000Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle5}
      />
      <div className={styles.namaBarang}>Nama Barang</div>
      <div className={styles.detailBarang}>Detail barang</div>
      <div className={styles.rp100000Wrapper}>
        <b className={styles.rp100000} style={rp100000Style}>
          Rp. 100.000
        </b>
      </div>
    </div>
  );
};

export default GroupComponent1;
