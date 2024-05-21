import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import Footer1 from "../components/Footer1";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onLogoObeng2ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSudahMempunyaiAkunClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <img
          className={styles.logoobeng2Icon}
          loading="lazy"
          alt=""
          src="/logoobeng-2@2x.png"
          onClick={onLogoObeng2ImageClick}
        />
      </header>
      <section className={styles.signUpFormWrapper}>
        <div className={styles.grayBackground}>
          <div className={styles.signUpForm}>
            <div className={styles.signUpFormInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-131@2x.png"
              />
            </div>
            <FrameComponent4 onSudahMempunyaiAkunClick={onSudahMempunyaiAkunClick} />
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default SignUp;
