import styles from "./Habilidades.module.css";

interface props {
  texts: string[];
}

const HabilidadesComponent = ({ texts }: props) => {
  return (
    <div className={styles.textHab}>
      {texts.map((text, index) => (
        <p key={index} className={styles.divText}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default HabilidadesComponent;
