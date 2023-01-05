import React from 'react';
import styled from "styled-components";
import img from "./../../img/3e055bda12f27b45a8da74749e6fde53.png"

const About = () => {
  return (
    <Hero>
      <HeroBackgroundImg></HeroBackgroundImg>
      <HeroTitle> is the about page</HeroTitle>
    </Hero>
  );
} 
export default About;

const Hero= styled.div`

`

const HeroTitle= styled.h1`
  
`

const HeroBackgroundImg = styled.div`
  height: 800px;
  width: 100vw;
  background-image: url(${img});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: cover;
  background-position: center;
`;