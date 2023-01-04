import React from "react";
import { slide as Menu } from "react-burger-menu";
import styled from 'styled-components';
// import "./navbar.css";

const NewBar = (props) => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <Nav {...props}>
      <span className="logo">logo</span>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/booking">Booking</NavItem>
      <NavItem href="/contact">Contact</NavItem>

      <a onClick={showSettings} className="menu-item--small" href="/">
        test
      </a>
    </Nav>
  );
};

export default NewBar;

const Nav = styled.div`
  height: 80px;
  background-color: #5284b9;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content:center; */
`;
;
const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3e580c;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
  margin: 1rem;
  margin-left: 20px;
  &:hover {
    background-color: lightblue;
  }
  &:active {
    background-color: dodgerblue;
    color: white;
  }
`;