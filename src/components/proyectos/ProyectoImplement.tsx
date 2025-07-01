import ProyectoComponent from "./ProyectoComponent";
import styles from "./Proyecto.module.css";

const ProyectoImplement = () => {
  return (
    <div className={styles.proyeDiv}>
      <div>
        <h2>Proyectos</h2>
        <br />
      </div>
      <div className={styles.proyeImple}>
        <ProyectoComponent
          tituloProye="Proyecto fullstack"
          imgProye="./public/img-site-org.png"
          textProye="Back y front"
        />
      </div>
    </div>
  );
};

export default ProyectoImplement;
