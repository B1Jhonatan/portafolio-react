import TecnologiaComponent from "./TecnologiaComponent";
import styles from "./Tecnologia.module.css";

const TecnologiasImplement = () => {
  return (
    <div className={styles.containTecs}>
      <TecnologiaComponent
        imgText="./public/java.png"
        imgName="java"
        nameTec="Java"
      />
      <TecnologiaComponent
        imgText="./public/spring.png"
        imgName="spring"
        nameTec="Spring"
      />
      <TecnologiaComponent
        imgText="./public/python.png"
        imgName="python"
        nameTec="Python"
      />
      <TecnologiaComponent
        imgText="./public/c-sharp.png"
        imgName="csharp"
        nameTec="C#"
      />
      <TecnologiaComponent
        imgText="./public/git.png"
        imgName="git"
        nameTec="Git"
      />
      <TecnologiaComponent
        imgText="./public/postman.png"
        imgName="postman"
        nameTec="Postman"
      />
      <TecnologiaComponent
        imgText="./public/react.png"
        imgName="react"
        nameTec="React"
      />
      <TecnologiaComponent
        imgText="./public/typescript.png"
        imgName="type-script"
        nameTec="TypeScript"
      />
      <TecnologiaComponent
        imgText="./public/js.png"
        imgName="java-script"
        nameTec="JavaScript"
      />
      <TecnologiaComponent
        imgText="./public/html.png"
        imgName="html"
        nameTec="HTML"
      />
      <TecnologiaComponent
        imgText="./public/css.png"
        imgName="css"
        nameTec="CSS"
      />
    </div>
  );
};

export default TecnologiasImplement;
