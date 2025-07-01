import React from "react";
import { Link } from "react-router-dom";

interface props {
  nombre: string;
  css: string;
  href: string;
}

const RedirectComponent = ({ nombre, css, href }: props) => {
  return (
    <>
      <Link to={href} className={css}>
        {nombre}
      </Link>
    </>
  );
};

export default RedirectComponent;
