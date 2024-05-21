import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BengkelVerticalA from "./BengkelVerticalA";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Bengkel.module.css";

const Bengkel = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkelClick = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel1Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel2Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel5Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage5Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel7Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage6Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel3Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage7Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel4Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onRectangleImage8Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  const onDummyNamaBengkel6Click = useCallback(() => {
    navigate("/bengkelinfo");
  }, [navigate]);

  return (
    <div className={styles.bengkel}>
      <BengkelVerticalA
        rectangle8="/rectangle-6@2x.png"
        dummyNamaBengkelA="Dummy Nama Bengkel A"
        mobilLayananLayananLayana="Mobil | Layanan | Layanan | Layanan | dan lainnya"
        onRectangleImageClick={onRectangleImageClick}
        onDummyNamaBengkelClick={onDummyNamaBengkelClick}
      />
      <BengkelVerticalA
        rectangle8="/rectangle-6-2@2x.png"
        dummyNamaBengkelA="Dummy Nama Bengkel C"
        mobilLayananLayananLayana="Motor | Mobil | Layanan | Layanan | dan lainnya"
        onRectangleImageClick={onRectangleImage2Click}
        onDummyNamaBengkelClick={onDummyNamaBengkel1Click}
      />
      <div className={styles.bengkelverticalbParent}>
        <BengkelVerticalA
          rectangle8="/rectangle-6-1@2x.png"
          dummyNamaBengkelA="Dummy Nama Bengkel B"
          mobilLayananLayananLayana="Motor | Layanan | Layanan | Layanan | dan lainnya"
          onRectangleImageClick={onRectangleImage3Click}
          onDummyNamaBengkelClick={onDummyNamaBengkel2Click}
        />
        <FrameComponent1
          rectangle8="/rectangle-6-2@2x.png"
          dummyNamaBengkelC="Dummy Nama Bengkel C"
          motorMobilLayananLayanan="Motor | Mobil | Layanan | Layanan | dan lainnya"
          onRectangleImage3Click={onRectangleImage4Click}
          onDummyNamaBengkel5Click={onDummyNamaBengkel5Click}
        />
        <FrameComponent1
          rectangle8="/rectangle-6-1@2x.png"
          dummyNamaBengkelC="Dummy Nama Bengkel B"
          motorMobilLayananLayanan="Motor | Layanan | Layanan | Layanan | dan lainnya"
          propPadding="0px 0px var(--padding-10xs)"
          onRectangleImage3Click={onRectangleImage5Click}
          onDummyNamaBengkel5Click={onDummyNamaBengkel7Click}
        />
        <FrameComponent1
          rectangle8="/rectangle-6@2x.png"
          dummyNamaBengkelC="Dummy Nama Bengkel A"
          motorMobilLayananLayanan="Mobil | Layanan | Layanan | Layanan | dan lainnya"
          propPadding="0px 0px var(--padding-10xs)"
          onRectangleImage3Click={onRectangleImage6Click}
          onDummyNamaBengkel5Click={onDummyNamaBengkel3Click}
        />
        <FrameComponent1
          rectangle8="/rectangle-6-2@2x.png"
          dummyNamaBengkelC="Dummy Nama Bengkel C"
          motorMobilLayananLayanan="Motor | Mobil | Layanan | Layanan | dan lainnya"
          propPadding="0px 0px var(--padding-10xs)"
          onRectangleImage3Click={onRectangleImage7Click}
          onDummyNamaBengkel5Click={onDummyNamaBengkel4Click}
        />
        <BengkelVerticalA
          rectangle8="/rectangle-6-1@2x.png"
          dummyNamaBengkelA="Dummy Nama Bengkel B"
          mobilLayananLayananLayana="Motor | Layanan | Layanan | Layanan | dan lainnya"
          onRectangleImageClick={onRectangleImage8Click}
          onDummyNamaBengkelClick={onDummyNamaBengkel6Click}
        />
      </div>
    </div>
  );
};

export default Bengkel;
