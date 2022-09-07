import styled from "styled-components";

export const StyledSection = styled.section`
  font-family: var(--fontPops);
  display: flex;
  height: 85vh;
  justify-content: space-around;
  align-items: center;
`

export const StyledH1 = styled.h1`
  font-size: 35px;
  animation: changeColor 1s infinite;
  text-align: start;
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

export const StyledDivPre = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;
  max-width: max-content;
`

export const StayledDivButtom = styled.div`
`

export const StayledAButtom = styled.a`
  background: #0f0b1e;
  position: relative;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 10px;
  transition: 0.5s;
  &:hover {
    letter-spacing: 0.25em;
    background: #bd436a;
    color: #bd436a;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #444;
  }
`

export const StyledSpan = styled.span`
  position: relative;
  z-index: 1;
`
