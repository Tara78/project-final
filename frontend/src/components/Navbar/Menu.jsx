import React from 'react';
import styled from 'styled-components';
// import { slide as Menu } from 'react-burger-menu';


const Menu = () => {


  return ( 
    <nav>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
    </nav>
   );
}
 
export default Menu;


/*Styling*/
const MenuItem= styled.a`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
   &:hover {
    background-color: lightblue;
  }
  &:active{
     background-color: dodgerblue;
  color: white;
  }
`