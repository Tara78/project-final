import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RightNav open={open} />
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
    </>
  );
};

const BurgerStyled = styled.div`
  width: 2rem;
  height: 2rem;
  top: 30px;
  left: 36px;
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  background: transparent;
  cursor: pointer;
  /* display: none; */

  @media (max-width: 768) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    display: inline-block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#575353cc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
