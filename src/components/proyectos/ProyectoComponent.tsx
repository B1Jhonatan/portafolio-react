import { Link } from "react-router-dom";
import styles from "./Proyecto.module.css";

interface props {
  tituloProye: string;
  imgProye: string;
  textProye: string;
}

const ProyectoComponent = ({ tituloProye, imgProye, textProye }: props) => {
  return (
    <div className={styles.containProye}>
      <Link to="/proyecto-fullstack" className={styles.containText}>
        <h1>{tituloProye}</h1>
        <br />
        <img src={imgProye} alt={tituloProye} className={styles.imgProye} />
        <br />
        <br />
        <p className={styles.proyeParra}>{textProye}</p>
      </Link>
    </div>
  );
};

export default ProyectoComponent;
