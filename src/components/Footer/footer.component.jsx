import React from "react";
import * as S from './header.styles';

export function Footer() {
  return (
    <S.Footer> 
      <S.Nav>
        <a href="https://www.linkedin.com/in/apolo-henrique-rangel-rezende/" target='_blank' rel="noreferrer">
        {' '}
        <S.StyledPlinkeDin>Linkdin</S.StyledPlinkeDin>
        </a>
        <a href="https://www.github.com/apolorezende/" target='_blank' rel="noreferrer">
        {' '}
        <S.StyledPgitHub>GitHub</S.StyledPgitHub>
        </a>
        <a href="https://www.instagram.com/apolo_rezende/" target='_blank' rel="noreferrer">
        {' '}
        <S.StyledPinstagram>instagram</S.StyledPinstagram>
        </a>
      </S.Nav>
    </S.Footer>
  )
}