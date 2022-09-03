import React from "react";
import { Link } from "react-router-dom";
import * as S from './header.styles';

export function Header() {
  return (
    <S.Header>
      <Link to="/"><h1>Apolo</h1></Link>
      <S.Nav>
        <Link to="/about"><p>About</p></Link> |{" "}
        <Link to="/project"><p>Project</p></Link> |{" "}
        <Link to="/setup"><p>Setup</p></Link> |{" "}
        <Link to="/contact"><p>Contact</p></Link> |{" "}
        <a 
          className="curriculo"
          href="../../file/apolorezende.pdf"
          rel="curriculo" download>
            <p>Download CV</p>
        </a >
      </S.Nav>
    </S.Header>
  )
}