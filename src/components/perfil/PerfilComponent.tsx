import styles from "./Perfil.module.css";

interface props {
  nombre: string;
  texto: string;
  imgtext: string;
  imgName: string;
}

const PerfilComponent = ({ nombre, imgtext, imgName, texto }: props) => {
  return (
    <div className={styles.containPerfil}>
      <img src={imgtext} alt={imgName} className={styles.imgPerfil} />
      <div className={styles.parrafCointain}>
        <h2>{nombre}</h2>
        <p className={styles.parrafPerfil}>{texto}</p>
      </div>
    </div>
  );
};

export default PerfilComponent;
