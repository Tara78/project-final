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
  /* padding-top: 20px; */
  display: flex;
  flex-direction: row;
  align-items: center;
 
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
  font-size: 22px;
  border-radius: 5px;
  margin: 1rem;
  margin-left: 20px;
  &:hover {
    background-color: #d9dee1;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: -10px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export default NewBar;
