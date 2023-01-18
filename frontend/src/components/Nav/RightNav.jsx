import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <NavItem to="/">Accueil</NavItem>
      <NavItem to="/about">A propos de</NavItem>
      <NavItem to="/login">Prendre RV</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/tarif">Tarif</NavItem>
      <NavItem to="/why">La Gestalt-thérapie </NavItem>
    </UL>
  );
};

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 3rem;

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #f1f1f1;
    position: fixed;
    transform: ${({ open }) => (open ? "tarnslateX(0)" : "tarnslateX(100%)")};
    top: -15px;
    left: -40px;
    height: auto;
    width: 30%;
    padding-top: 3.5rem;
    border-radius: 10px;
    position: absolute;
    transform: translate(-100%);
    transition: transform 0.5s ease-in-out;
    /* transition: 1s;
    transform: translateX(-50px); */
    display: flex;
    z-index: 100;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #110738;
  font-weight: bold;
  text-align: start;
  padding: 10px;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
  margin: 1rem;

  &:hover {
    /* background-color: #e9ecee; */
    text-decoration: underline;
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
  }
`;

export default RightNav;
