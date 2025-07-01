import HabilidadesImplement from "../../habilidades/HabilidadesImplement";
import PerfilImplement from "../../perfil/PerfilImplement";
import GithubImplement from "../../proyectos-curso/GithubImplement";
import ProyectoImplement from "../../proyectos/ProyectoImplement";
import TecnologiasImplement from "../../tecnologias/TecnologiasImplement";
import styles from "./Portafolio.module.css";

const PortafolioBody = () => {
  return (
    <div className={styles.containBody}>
      <PerfilImplement />
      <TecnologiasImplement />
      <ProyectoImplement />
      <GithubImplement />
      <HabilidadesImplement />
    </div>
  );
};

export default PortafolioBody;
