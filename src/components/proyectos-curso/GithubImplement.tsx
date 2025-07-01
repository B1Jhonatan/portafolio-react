import GithubComponent from "./GithubComponent";
import styles from "./Github.module.css";

const GithubImplement = () => {
  return (
    <div className={styles.ghContain}>
      <div>
        <h2>Proyectos en curso en 'GitHub'</h2>
      </div>
      <br />
      <div className={styles.ghBoxProye}>
        <GithubComponent
          tituloProyecto="Calculadora-obra-backend"
          descripText="Calculadora de elementos de obra de construccion backend."
          linkRedirect="https://github.com/B1Jhonatan/back-obra"
        />
        <GithubComponent
          tituloProyecto="Calculadora-obra-frontend"
          descripText="Calculadora de elementos de obra de construccion del lado del front."
          linkRedirect="https://github.com/B1Jhonatan/back-obra"
        />
        <GithubComponent
          tituloProyecto="Automatizacion python"
          descripText="Scripts que he realizado para automa. mi trabajo."
          linkRedirect="https://github.com/B1Jhonatan/back-obra"
        />
      </div>
    </div>
  );
};

export default GithubImplement;
