import PerfilImplement from "../../perfil/PerfilImplement";
import ProyectoImplement from "../../proyectos/ProyectoImplement";
import TecnologiasImplement from "../../tecnologias/TecnologiasImplement";
import styles from "./Portafolio.module.css";

const PortafolioBody = () => {
  return (
    <div className={styles.containBody}>
      <PerfilImplement />
      <TecnologiasImplement />
      <ProyectoImplement />
    </div>
  );
};

export default PortafolioBody;
