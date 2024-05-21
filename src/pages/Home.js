import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel5Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel3Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel11Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel9Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage5Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel17Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage6Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel15Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDataProcessorImageClick = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel2Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage7Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel1Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkelClick = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage22Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel4Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage32Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel8Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage42Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel7Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage52Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel6Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage62Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel10Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage72Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel14Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage8Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel13Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage9Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel12Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage10Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel16Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <section className={styles.headerParent}>
        <Header />
        <FrameComponent />
      </section>
      <section className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.bengkelRekomendasiWrapper}>
                  <h2 className={styles.bengkelRekomendasi}>
                    Bengkel Rekomendasi
                  </h2>
                </div>
                <button className={styles.lihatsemuabutton}>
                  <img
                    className={styles.lihatsemuabuttonChild}
                    alt=""
                    src="/rectangle-3-1.svg"
                  />
                  <b className={styles.lihatSemua}>Lihat Semua</b>
                </button>
              </div>
            </div>
            <div className={styles.bengkelslide}>
              <div className={styles.arrowLeftWrapper}>
                <img
                  className={styles.arrowLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/arrow-left@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.dataProcessorParent}>
                  <img
                    className={styles.dataProcessorIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6@2x.png"
                    onClick={onDataProcessorImageClick}
                  />
                  <div className={styles.inputCollector}>
                    <b
                      className={styles.dummyNamaBengkel}
                      onClick={onDummyNamaBengkel2Click}
                    >
                      Dummy Nama Bengkel A
                    </b>
                    <div className={styles.conditionChecker}>
                      <b className={styles.functionApplier}>4.8/5</b>
                      <img
                        className={styles.loopControllerIcon}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.mobilLayanan}>
                      Mobil | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage7Click}
                  />
                  <div className={styles.dummyNamaBengkelBParent}>
                    <b
                      className={styles.dummyNamaBengkel1}
                      onClick={onDummyNamaBengkel1Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.parent}>
                      <b className={styles.b}>4.8/5</b>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat1}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-2@2x.png"
                    onClick={onRectangleImage1Click}
                  />
                  <div className={styles.dummyNamaBengkelCParent}>
                    <b
                      className={styles.dummyNamaBengkel2}
                      onClick={onDummyNamaBengkelClick}
                    >
                      Dummy Nama Bengkel C
                    </b>
                    <div className={styles.group}>
                      <b className={styles.b1}>4.8/5</b>
                      <img
                        className={styles.icon1}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat2}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorMobil}>
                      Motor | Mobil | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage22Click}
                  />
                  <div className={styles.dummyNamaBengkelBGroup}>
                    <b
                      className={styles.dummyNamaBengkel3}
                      onClick={onDummyNamaBengkel4Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.container}>
                      <b className={styles.b2}>4.8/5</b>
                      <img
                        className={styles.icon2}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat3}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan1}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <GroupComponent
                  rectangle6="/rectangle-6@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel A"
                  mobilLayananLayanan="Mobil | Layanan | Layanan"
                  onRectangleImage4Click={onRectangleImageClick}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel5Click}
                />
                <GroupComponent
                  rectangle6="/rectangle-6-2@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel C"
                  mobilLayananLayanan="Motor | Mobil | Layanan"
                  propWidth="167px"
                  onRectangleImage4Click={onRectangleImage2Click}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel3Click}
                />
              </div>
              <div className={styles.arrowLeftContainer}>
                <img
                  className={styles.arrowLeftIcon1}
                  alt=""
                  src="/arrow-left-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.bengkelBerdasarkanKebutuhanWrapper}>
                  <h2 className={styles.bengkelBerdasarkanKebutuhan}>
                    Bengkel Berdasarkan Kebutuhan
                  </h2>
                </div>
                <div className={styles.motorWrapper}>
                  <h2 className={styles.motor}>Motor</h2>
                </div>
                <button className={styles.lihatsemuabutton1}>
                  <img
                    className={styles.lihatsemuabuttonItem}
                    alt=""
                    src="/rectangle-3-1.svg"
                  />
                  <b className={styles.lihatSemua1}>Lihat Semua</b>
                </button>
              </div>
            </div>
            <div className={styles.bengkelslide1}>
              <div className={styles.arrowLeftFrame}>
                <img
                  className={styles.arrowLeftIcon2}
                  alt=""
                  src="/arrow-left@2x.png"
                />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.rectangleIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6@2x.png"
                    onClick={onRectangleImage32Click}
                  />
                  <div className={styles.dummyNamaBengkelAParent}>
                    <b
                      className={styles.dummyNamaBengkel4}
                      onClick={onDummyNamaBengkel8Click}
                    >
                      Dummy Nama Bengkel A
                    </b>
                    <div className={styles.parent1}>
                      <b className={styles.b3}>4.8/5</b>
                      <img
                        className={styles.icon3}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat4}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.mobilLayanan1}>
                      Mobil | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage42Click}
                  />
                  <div className={styles.dummyNamaBengkelBContainer}>
                    <b
                      className={styles.dummyNamaBengkel5}
                      onClick={onDummyNamaBengkel7Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.parent2}>
                      <b className={styles.b4}>4.8/5</b>
                      <img
                        className={styles.icon4}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat5}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan2}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent2}>
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-2@2x.png"
                    onClick={onRectangleImage52Click}
                  />
                  <div className={styles.inputProcessor}>
                    <b
                      className={styles.dummyNamaBengkel6}
                      onClick={onDummyNamaBengkel6Click}
                    >
                      Dummy Nama Bengkel C
                    </b>
                    <div className={styles.parent3}>
                      <b className={styles.b5}>4.8/5</b>
                      <img
                        className={styles.icon5}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat6}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorMobil1}>
                      Motor | Mobil | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage62Click}
                  />
                  <div className={styles.dummyNamaBengkelBParent1}>
                    <b
                      className={styles.dummyNamaBengkel7}
                      onClick={onDummyNamaBengkel10Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.parent4}>
                      <b className={styles.b6}>4.8/5</b>
                      <img
                        className={styles.icon6}
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat7}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan3}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <GroupComponent
                  rectangle6="/rectangle-6@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel A"
                  mobilLayananLayanan="Mobil | Layanan | Layanan"
                  propWidth="184px"
                  onRectangleImage4Click={onRectangleImage3Click}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel11Click}
                />
                <GroupComponent
                  rectangle6="/rectangle-6-2@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel C"
                  mobilLayananLayanan="Motor | Mobil | Layanan"
                  propWidth="167px"
                  onRectangleImage4Click={onRectangleImage4Click}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel9Click}
                />
              </div>
              <div className={styles.arrowLeftWrapper1}>
                <img
                  className={styles.arrowLeftIcon3}
                  alt=""
                  src="/arrow-left-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent5}>
                <div className={styles.bengkelBerdasarkanKebutuhanContainer}>
                  <h2 className={styles.bengkelBerdasarkanKebutuhan1}>
                    Bengkel Berdasarkan Kebutuhan
                  </h2>
                </div>
                <div className={styles.mobilWrapper}>
                  <h2 className={styles.mobil}>Mobil</h2>
                </div>
                <button className={styles.lihatsemuabutton2}>
                  <img
                    className={styles.lihatsemuabuttonInner}
                    alt=""
                    src="/rectangle-3-1.svg"
                  />
                  <b className={styles.lihatSemua2}>Lihat Semua</b>
                </button>
              </div>
            </div>
            <div className={styles.bengkelslide2}>
              <div className={styles.arrowLeftWrapper2}>
                <img
                  className={styles.arrowLeftIcon4}
                  loading="lazy"
                  alt=""
                  src="/arrow-left@2x.png"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.rectangleParent4}>
                  <img
                    className={styles.frameChild4}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6@2x.png"
                    onClick={onRectangleImage72Click}
                  />
                  <div className={styles.dummyNamaBengkelAGroup}>
                    <b
                      className={styles.dummyNamaBengkel8}
                      onClick={onDummyNamaBengkel14Click}
                    >
                      Dummy Nama Bengkel A
                    </b>
                    <div className={styles.parent5}>
                      <b className={styles.b7}>4.8/5</b>
                      <img
                        className={styles.icon7}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat8}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.mobilLayanan2}>
                      Mobil | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent5}>
                  <img
                    className={styles.frameChild5}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage8Click}
                  />
                  <div className={styles.dummyNamaBengkelBParent2}>
                    <b
                      className={styles.dummyNamaBengkel9}
                      onClick={onDummyNamaBengkel13Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.parent6}>
                      <b className={styles.b8}>4.8/5</b>
                      <img
                        className={styles.icon8}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat9}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan4}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent6}>
                  <img
                    className={styles.frameChild6}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-2@2x.png"
                    onClick={onRectangleImage9Click}
                  />
                  <div className={styles.dummyNamaBengkelCGroup}>
                    <b
                      className={styles.dummyNamaBengkel10}
                      onClick={onDummyNamaBengkel12Click}
                    >
                      Dummy Nama Bengkel C
                    </b>
                    <div className={styles.parent7}>
                      <b className={styles.b9}>4.8/5</b>
                      <img
                        className={styles.icon9}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat10}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorMobil2}>
                      Motor | Mobil | Layanan
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent7}>
                  <img
                    className={styles.frameChild7}
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-1@2x.png"
                    onClick={onRectangleImage10Click}
                  />
                  <div className={styles.dummyNamaBengkelBParent3}>
                    <b
                      className={styles.dummyNamaBengkel11}
                      onClick={onDummyNamaBengkel16Click}
                    >
                      Dummy Nama Bengkel B
                    </b>
                    <div className={styles.parent8}>
                      <b className={styles.b10}>4.8/5</b>
                      <img
                        className={styles.icon10}
                        loading="lazy"
                        alt=""
                        src="/6755552-2@2x.png"
                      />
                    </div>
                    <div className={styles.dummyDataAlamat11}>
                      Dummy data alamat bengkel
                    </div>
                    <div className={styles.motorLayanan5}>
                      Motor | Layanan | Layanan
                    </div>
                  </div>
                </div>
                <GroupComponent
                  rectangle6="/rectangle-6@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel A"
                  mobilLayananLayanan="Mobil | Layanan | Layanan"
                  propWidth="184px"
                  onRectangleImage4Click={onRectangleImage5Click}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel17Click}
                />
                <GroupComponent
                  rectangle6="/rectangle-6-2@2x.png"
                  dummyNamaBengkelA="Dummy Nama Bengkel C"
                  mobilLayananLayanan="Motor | Mobil | Layanan"
                  propWidth="167px"
                  onRectangleImage4Click={onRectangleImage6Click}
                  onDummyNamaBengkel5Click={onDummyNamaBengkel15Click}
                />
              </div>
              <div className={styles.arrowLeftWrapper3}>
                <img
                  className={styles.arrowLeftIcon5}
                  alt=""
                  src="/arrow-left-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className={styles.banner1Icon} alt="" src="/banner1@2x.png" />
      <Footer />
    </div>
  );
};

export default Home;
