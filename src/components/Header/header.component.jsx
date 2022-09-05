import React from "react";
import { Link } from "react-router-dom";
import * as S from './header.styles';
import rocketLogo from '../../img/rocketLogo.png'

export function Header() {
  return (
    <S.Header>
        <Link to="/">
          <S.H1>Apolo 
            <S.StyledLogo src={ rocketLogo } alt="" />
          </S.H1>
        </Link>
      <S.Nav>
        <Link to="/about"><p>About</p></Link> {" "}
        <Link to="/project"><p>Project</p></Link> {" "}
        <Link to="/setup"><p>Setup</p></Link> {" "}
        <Link to="/ability"><p>Ability</p></Link> {" "}
        <a
          href="../../file/apolorezende.pdf"
          rel="curriculo" download>
            <p>Download CV</p>
        </a >
      </S.Nav>
    </S.Header>
  )
};