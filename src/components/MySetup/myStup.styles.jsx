import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20%;
  height: 85vh;
  font-family: var(--fontPops);
  width: 100%;
  min-width: 200px;
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

export const StyledH3 = styled.h3`
  font-size: 20px;
  color: #fff;
`

export const StyledOl = styled.ol`
  font-size: 15px;
  color: #fff;
  padding: 20px;
`