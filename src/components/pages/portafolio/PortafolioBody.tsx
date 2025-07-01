import PerfilImplement from "../../perfil/PerfilImplement";
import TecnologiasImplement from "../../tecnologias/TecnologiasImplement";
import styles from "./Portafolio.module.css";

const PortafolioBody = () => {
  return (
    <div className={styles.containBody}>
      <PerfilImplement />
      <TecnologiasImplement />
    </div>
  );
};

export default PortafolioBody;
