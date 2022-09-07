import React from "react";
import * as S from './preAbout.styles';
import alienGif from '../../img/alienGif.gif'

export function PreAbout() {
  return (
    <S.StyledSection>
      <S.StyledDivPre>
        <div>
          <S.StyledH1>Apolo Rezende</S.StyledH1>
          <br />
          <S.StyledParagraf>Full-Stack Developer | Studant at <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>.</S.StyledParagraf>
          <S.StyledParagraf>A person who is trying to impress you.</S.StyledParagraf>
          <br />
        </div>
        <S.StayledDivButtom>
          <S.StayledAButtom href="/about">
            <S.StyledSpan> Explore </S.StyledSpan>
            <i></i>
          </S.StayledAButtom>
        </S.StayledDivButtom>
      </S.StyledDivPre>
      <div>
        <img src={ alienGif } alt="" />
      </div>
      
    </S.StyledSection>
    
  );
}