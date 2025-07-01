import PerfilComponent from "../../perfil/PerfilComponent";
import styles from "./Portafolio.module.css";

const PortafolioBody = () => {
  return (
    <div className={styles.containBody}>
      <PerfilComponent
        nombre="Jhonatan Jaimes"
        texto="Desarrollador orientado al backend con formación técnica y experiencia en la creación de soluciones estructuradas, escalables y centradas en la lógica de negocio. Manejo sólidos fundamentos en programación orientada a objetos con Java, así como en el diseño de estructuras de datos y automatización de tareas. Además, cuento con experiencia en el desarrollo de scripts para programas de modelado 3D y conocimien- tos en tecnologías del lado del cliente, lo que me permite integrar ade- cuadamente las capas del sistema y aportar una visión completa al desarrollo de software."
        imgName="foto"
        imgtext="../public/foto-002.jpg"
      />
    </div>
  );
};

export default PortafolioBody;
