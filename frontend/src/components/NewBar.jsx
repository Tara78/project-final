import React from "react";
import styled from "styled-components";

const NewBar = (props) => {
  return (
    <Nav {...props}>
      <NavItem href="/">Accueil</NavItem>
      <NavItem href="/about">A propos de</NavItem>
      <NavItem href="/login">Prendre RV</NavItem>
      <NavItem href="/contact">Contact</NavItem>
      <NavItem href="/tarif">Tarif</NavItem>
      <NavItem href="/why">Pourquoi la Gestalt-thérapie </NavItem>
    </Nav>
  );
};

const Nav = styled.div`
  height: 60px;
  width: 90vw;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (width: 375px) {
    font-size: 60%;
    align-items: center;
    justify-content: space-around;
  }
`;
const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #110738;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
  margin: 1rem;
  margin-left: 20px;
  &:hover {
    background-color: #d9dee1;
  }
  @media (width: 375px) {
      display: flex;
    justify-content: space-around;
  }

  @media (width: 768px) {
    width: 100%;
    /* font-size: 80%; */
    display: flex;
    justify-content: space-between;
    /* margin: 0; */
  }
`;

export default NewBar;
