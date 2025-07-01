import RedirectComponent from "../redirect/RedirectComponent";
import styles from "./Header.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containHeader}>
        <div>
          <h1>Portafolio</h1>
        </div>
        <div className={styles.containBoton}>
          <RedirectComponent
            nombre="Perfil"
            href="/#perfil"
            css={styles.boton}
          />
          <RedirectComponent
            nombre="Tecnologias"
            href="/#Tenologias"
            css={styles.boton}
          />
          <RedirectComponent
            nombre="Proyectos"
            href="/#Proyectos"
            css={styles.boton}
          />
          <RedirectComponent
            nombre="Habilidades"
            href="/#Habilidades"
            css={styles.boton}
          />
          <RedirectComponent
            nombre="Contacto"
            href="/#Contacto"
            css={styles.boton}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
