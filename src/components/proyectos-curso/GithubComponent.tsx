import { Link } from "react-router-dom";
import styles from "./Github.module.css";

interface props {
  tituloProyecto: string;
  descripText: string;
  linkRedirect: string;
}

const GithubComponent = (prop: props) => {
  return (
    <div className={styles.ghProye}>
      <h3>{prop.tituloProyecto}</h3>
      <br />
      <p>{prop.descripText}</p>
      <br />
      <br />
      <Link to={prop.linkRedirect} className={styles.ghBoton}>
        Ir a GitHub
      </Link>
    </div>
  );
};

export default GithubComponent;
