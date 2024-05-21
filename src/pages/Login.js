import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import Footer1 from "../components/Footer1";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onBelumMempunyaiAkunClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLogoObeng2ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <main className={styles.headerParent}>
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
        <section className={styles.frameWrapper}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className={styles.vectorGroup}>
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-12.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.loginWrapper}>
                  <b className={styles.login1}>Login</b>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="email">Email:</label>
                  <input
                    id="email"
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <FrameComponent3
                masuk="Masuk"
                belumMempunyaiAkun="Belum mempunyai akun? "
                signUp="Sign up!"
                onBelumMempunyaiAkunClick={onBelumMempunyaiAkunClick}
              />
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  ___________________________________________________
                </div>
              </div>
              <div className={styles.atauDapatMenggunakanCaraAlWrapper}>
                <div className={styles.atauDapatMenggunakan}>
                  Atau dapat menggunakan cara alternatif
                </div>
              </div>
              <button className={styles.loginguest}>
                <img
                  className={styles.loginguestChild}
                  alt=""
                  src="/rectangle-3-11.svg"
                />
                <b className={styles.masukSebagaiTamu}>Masuk Sebagai Tamu</b>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Login;
