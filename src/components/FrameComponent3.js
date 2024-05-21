import { useMemo } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  masuk,
  belumMempunyaiAkun,
  signUp,
  propPadding,
  onBelumMempunyaiAkunClick,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.loginbuttonParent}>
      <button className={styles.loginbutton}>
        <img
          className={styles.loginbuttonChild}
          alt=""
          src="/rectangle-31.svg"
        />
        <b className={styles.masuk}>{masuk}</b>
      </button>
      <div
        className={styles.belumMempunyaiAkunSignUpWrapper}
        style={frameDiv1Style}
      >
        <div
          className={styles.belumMempunyaiAkunContainer}
          onClick={onBelumMempunyaiAkunClick}
        >
          <span>{belumMempunyaiAkun}</span>
          <span className={styles.signUp}>{signUp}</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
