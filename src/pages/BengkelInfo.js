import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Footer1 from "../components/Footer1";
import styles from "./BengkelInfo.module.css";

const BengkelInfo = () => {
  const navigate = useNavigate();

  const onLogoObeng2ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchBarContainerClick = useCallback(() => {
    navigate("/searchlihatsemua");
  }, [navigate]);

  return (
    <div className={styles.bengkelinfo}>
      <Header1
        onLogoObeng2ImageClick={onLogoObeng2ImageClick}
        onSearchBarContainerClick={onSearchBarContainerClick}
      />
      <main className={styles.bengkelinfoInner}>
        <section className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-4@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.namaBengkelParent}>
                    <b className={styles.namaBengkel}>Nama Bengkel</b>
                    <div className={styles.frameParent1}>
                      <div className={styles.wrapper}>
                        <b className={styles.b}>4.8/5</b>
                      </div>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/6755552-11@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.parent}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/1828956-1@2x.png"
                  />
                  <img
                    className={styles.icon2}
                    loading="lazy"
                    alt=""
                    src="/1257-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.loremIpsumDolorContainer}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum sem ut accumsan ullamcorper. Cras `}</p>
                <p
                  className={styles.sedCursusPurus}
                >{`sed cursus purus. Morbi ante mi, interdum at nulla non, eleifend tincidunt nunc. Nullam sit amet orci mi. Praesent `}</p>
                <p className={styles.lacusOdioCondimentum}>
                  lacus odio, condimentum vel mauris vitae, fermentum laoreet
                  nunc.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.layananYangDitawarkanParent}>
              <b className={styles.layananYangDitawarkan}>
                Layanan yang Ditawarkan
              </b>
              <div className={styles.layananLayananLayananLayanaParent}>
                <div className={styles.layananLayananLayananContainer}>
                  <ul className={styles.layananLayananLayananLayana}>
                    <li className={styles.layanan}>Layanan</li>
                    <li className={styles.layanan1}>Layanan</li>
                    <li className={styles.layanan2}>Layanan</li>
                    <li>Layanan</li>
                  </ul>
                </div>
                <div className={styles.layananLayananLayananContainer1}>
                  <ul className={styles.layananLayananLayananLayana1}>
                    <li className={styles.layanan3}>Layanan</li>
                    <li className={styles.layanan4}>Layanan</li>
                    <li className={styles.layanan5}>Layanan</li>
                    <li>Layanan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sparePartsListingParent}>
            <b className={styles.sparePartsListing}>Spare Parts Listing</b>
            <div className={styles.sparepartWrapper}>
              <div className={styles.sparepart}>
                <div className={styles.sparepartChild} />
                <div className={styles.sparepartInner}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameParent2}>
                      <GroupComponent1 rectangle5="/rectangle-5@2x.png" />
                      <GroupComponent1
                        rectangle5="/rectangle-5-1@2x.png"
                        propDisplay="inline-block"
                        propMinWidth="120px"
                      />
                      <GroupComponent1
                        rectangle5="/rectangle-5-2@2x.png"
                        propDisplay="inline-block"
                        propMinWidth="120px"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <GroupComponent1
                        rectangle5="/rectangle-5-2@2x.png"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                      <GroupComponent1
                        rectangle5="/rectangle-5-4@2x.png"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                      <GroupComponent1
                        rectangle5="/rectangle-5-1@2x.png"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.lokasiParent}>
              <b className={styles.lokasi}>Lokasi</b>
              <div className={styles.cardListInstance}>
                <img
                  className={styles.cardListInstanceChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-61@2x.png"
                />
                <div className={styles.group}>
                  <img
                    className={styles.icon3}
                    loading="lazy"
                    alt=""
                    src="/4557097-1@2x.png"
                  />
                  <div className={styles.cardItemX}>
                    <b className={styles.loremIpsumDolorContainer1}>
                      <p className={styles.loremIpsumDolor1}>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <p
                        className={styles.consecteturAdipiscingElit}
                      >{`consectetur adipiscing elit. `}</p>
                      <p
                        className={styles.praesentVestibulumSem}
                      >{`Praesent vestibulum sem `}</p>
                      <p className={styles.utAccumsanUllamcorper}>
                        ut accumsan ullamcorper.
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.captionLinkButtonWrapper}>
            <div className={styles.captionLinkButton}>
              <b className={styles.ulasan}>Ulasan</b>
              <div className={styles.dividerCircle}>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.subtitleBlockParent}>
                      <div className={styles.subtitleBlock}>4.8</div>
                      <div className={styles.backgroundPatternWrapper}>
                        <div className={styles.backgroundPattern}>/5.0</div>
                      </div>
                      <div className={styles.darkOverlay}>
                        <img
                          className={styles.whiteOverlayIcon}
                          loading="lazy"
                          alt=""
                          src="/6755552-11@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.starsParent}>
                      <div className={styles.stars}>5 Stars</div>
                      <div className={styles.stars1}>4 Stars</div>
                      <div className={styles.stars2}>3 Stars</div>
                      <div className={styles.stars3}>2 Stars</div>
                      <div className={styles.stars4}>1 Stars</div>
                    </div>
                    <div className={styles.frameWrapper4}>
                      <div className={styles.frameParent6}>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.frameChild1} />
                        </div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild2} />
                          <div className={styles.frameChild3} />
                        </div>
                        <div className={styles.frameChild4} />
                        <div className={styles.frameChild5} />
                        <div className={styles.frameChild6} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.breadcrumbItemXParent}>
                  <FrameComponent2 />
                  <FrameComponent2 />
                  <FrameComponent2 />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default BengkelInfo;
