import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Wrapper>
      <Nav ref={navRef}>
        <NavItem href="/">Accueil</NavItem>
        <NavItem href="/about">A propos de</NavItem>
        <NavItem href="/login">Prendre RV</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <NavItem href="/tarif">Tarif</NavItem>
        <NavItem href="/why">La Gestalt-thérapie </NavItem>
        <Button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </Button>
      </Nav>
      <Button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </Button>
    </Wrapper>
  );
};

const Button = styled.div`
  padding: 5px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  @media only screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
  font-size: 1.2rem;
`;

// const ButtonClose = styled.button`
//   padding: 5px;
//   cursor: pointer;
//    visibility: visible;
//   opacity: 1;

//   @media only screen and (max-width: 1024px) {
//     visibility: hidden;
//     opacity: 0;
//   }
// `;

const Wrapper = styled.nav`
  display: flex;
  background-color: #e4e1e1;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 1.5rem; */
    transition: 2s;
    transform: translateY(-50px);
  }
  .responsive_nav {
    transform: none;
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  color: #110738;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #f1f1f1;

    @media only screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export default Navbar;

// https://github.com/Index-Zero-0/Responsive-navbar-ReactJS
// https://www.youtube.com/watch?v=amf18mxNX18
