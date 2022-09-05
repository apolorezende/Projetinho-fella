import styled from "styled-components";

export const Footer = styled.footer`
  color: #fff !important;
  font-family: var(--fontPops);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  margin: 20px;
`

export const Nav = styled.nav`
  a{
  padding: 3px 10px;
  text-align: center;
  display: inline-flex;;
  border-radius: 16px;
  }
`

export const StyledImg = styled.img`
  max-width:16px;
  max-height:16px;
  width: auto;
  height: auto;
`

export const StyledPinstagram = styled.p`
  &:hover {
  color: #E1306C;
  }
`
export const StyledPgitHub = styled.p`
  &:hover {
  color: #515151;
  }
`
export const StyledPlinkeDin = styled.p`
  &:hover {
  color: #0e76a8;
  }
`
