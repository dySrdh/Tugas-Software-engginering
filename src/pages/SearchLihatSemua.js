import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Bengkel from "../components/Bengkel";
import Footer1 from "../components/Footer1";
import styles from "./SearchLihatSemua.module.css";

const SearchLihatSemua = () => {
  const navigate = useNavigate();

  const onLogoObeng2ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchBarContainerClick = useCallback(() => {
    navigate("/searchlihatsemua");
  }, [navigate]);

  return (
    <div className={styles.searchlihatsemua}>
      <Header1
        onLogoObeng2ImageClick={onLogoObeng2ImageClick}
        onSearchBarContainerClick={onSearchBarContainerClick}
      />
      <main className={styles.bengkelVerticalB}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.hasilPencarianParent}>
              <h2 className={styles.hasilPencarian}>Hasil Pencarian</h2>
              <h2 className={styles.bengkelRekomendasi}>
                “Bengkel Rekomendasi”
              </h2>
            </div>
            <div className={styles.parent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/10515853-1@2x.png"
              />
              <div className={styles.filterWrapper}>
                <div className={styles.filter}>Filter</div>
              </div>
            </div>
          </div>
          <Bengkel />
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default SearchLihatSemua;
