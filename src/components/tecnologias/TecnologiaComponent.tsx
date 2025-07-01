import styles from "./Tecnologia.module.css";

interface props {
  imgText: string;
  imgName: string;
  nameTec: string;
}

const TecnologiaComponent = ({ imgText, imgName, nameTec }: props) => {
  return (
    <div className={styles.containTec}>
      <img src={imgText} alt={imgName} className={styles.imgTec} />
      <br />
      <strong>{nameTec}</strong>
    </div>
  );
};

export default TecnologiaComponent;
