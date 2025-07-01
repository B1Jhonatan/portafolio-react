import styles from "./Perfil.module.css";

interface props {
  nombre: string;
  texto: string;
  imgtext: string;
  imgName: string;
  career: string;
}

const PerfilComponent = ({
  nombre,
  imgtext,
  imgName,
  texto,
  career,
}: props) => {
  return (
    <div className={styles.containPerfil}>
      <img src={imgtext} alt={imgName} className={styles.imgPerfil} />
      <div className={styles.parrafCointain}>
        <h2>{nombre}</h2>
        <br />
        <h3>{career}</h3>
        <br />
        <p className={styles.parrafPerfil}>{texto}</p>
      </div>
    </div>
  );
};

export default PerfilComponent;
