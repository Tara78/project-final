import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const NavbarR = () => {
  return (
    <Navbar>
      <Burger />
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
 `;

export default NavbarR;
