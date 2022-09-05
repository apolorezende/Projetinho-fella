import React from "react";
import * as S from './myStup.styles';

export function MySetup() {
  return (
    <S.StyledSection>
      <S.StyledH1>Setup</S.StyledH1>
      <br />
      <S.StyledH3>Equipments</S.StyledH3>
      <S.StyledOl>
        <li>Desktop - Custom PC</li>
        <li>Monitor - 2x Samsung Odyssey G3</li>
        <li>KeyBord - HyperX Alloy Origins </li>
        <li>Mouse - Hyperx PulseFire</li>
        <li>Webcam - Logitech C922 Pro</li>
        <li>HeadSet - Hyperx Cloud Core Black Edition</li>
      </S.StyledOl>
      <br />
      <S.StyledH3>Desktop Config</S.StyledH3>
      <S.StyledOl>
        <li>Motherbord - B550 Asus TUF Wi-Fi </li>
        <li>CPU - Ryzen 5 5600x</li>
        <li>GPU - GeForce RTX 3050 MSI</li>
        <li>Memory - 2x8GB Corsair Vengeance RGB</li>
        <li>WaterCooler - CoolerMaster ML240v2</li>
        <li>SSD - 2x XPG S11 M.2 512GB</li>
        <li>PSU - CX 650w Plus Bronze</li>
        <li>Case - Corsair Spec Delta ARGB</li>
      </S.StyledOl>
    </S.StyledSection>
  )
}