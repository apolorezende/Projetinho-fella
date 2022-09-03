import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="h1"> Apolo Henrique R. Rezende </h1>
      <nav className="nav">
        <Link className="link" to="/Abount">Abount</Link> |{" "}
        <Link className="link" to="/profile">Contract</Link> |{" "}
        <a className="curriculo" href="../../file/apolorezende.pdf" rel="curriculo" download> Download CV</a>
      </nav>
    </header>
  )
}