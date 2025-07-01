import HabilidadesComponent from "./HabilidadesComponent";
import styles from "./Habilidades.module.css";

const HabilidadesImplement = () => {
  return (
    <section className={styles.containHab}>
      <div>
        <h2>Habilidades blandas</h2>
        <br />
      </div>

      <HabilidadesComponent
        texts={[
          "Adaptabilidad",
          "Puntualidad",
          "Creatividad gracias a mis roles como arquitecto",
          "Comunicación efectiva",
          "Pensamiento critico",
          "Resolución de problemas",
          "Liderazgo",
        ]}
      />
    </section>
  );
};

export default HabilidadesImplement;
