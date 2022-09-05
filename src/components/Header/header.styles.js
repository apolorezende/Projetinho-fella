import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: #0f0b1e;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  color: #fff !important;
  font-family: var(--fontPops);
  padding-left: 20px;
`

export const H1 = styled.h1`
  font-size: x-large;
`
export const Nav = styled.nav`
  p{
  padding: 3px 10px;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
  &:hover {
  background-color: #fff;
  color: #000000;
  padding: 3px 10px;
  text-align: center;
  display: inline-block;
  border-radius: 16px;
  transition: 0.4s;
  }
  }
`
export const StyledLogo = styled.img`
  width: 25px;
  height: 25px;
  & {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`