import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
      <Menu>
      {/* <MenuItem><a href="/">Home</a></MenuItem> */}
      <MenuItem href="/" className="active">
      {/* <Icon className="fa solid fa-house-user"></Icon> */}
        Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
      <MenuItem href="/">Booking</MenuItem>
    </Menu>
   
  )
}

export default Navbar;


const Menu =styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
padding:  20px 30px;
box-shadow: 0 15px 15px rgba(0, 0, 0, 0.8);
  `

const MenuItem =styled.li`
list-style: none;
padding: 0 20px;
position: relative;
text-decoration: none;
font-size: 18px;
font-weight: 600;
transition:0.3 ease-in-out;
cursor: pointer;

&:hover{
color:darkblue;
}

&:hover::after
{
content:""; 
width: 50%;
height: 2px;
background-color: darkblue;
position: absolute;
bottom: -5px;
left: 20px;
}

`
const Icon= styled.i`
  font-size: 18px;
`



// https://reactrouter.com/en/main/components/nav-link