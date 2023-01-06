import React from 'react';
import styled from "styled-components";
import img from "./../../img/enfant-interieur.jpg";

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
  height: 400px;
  max-width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: cover;
  background-position: center;
`;