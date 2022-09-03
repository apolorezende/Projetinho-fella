import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 200px;
  font-family: var(--fontPops);
`

export const StyledH1 = styled.h1`
  font-size: 35px;
  animation: changeColor 1s infinite;
  @keyframes changeColor {
  0% {
    color: #93366c;
  }
  50% {
    color: #592b6c;
  }
  100% {
    color: #bd436a;
  }
}
`

export const StyledParagraf = styled.p`
  color: #fff;
  a {
    text-decoration: underline;
  }
`