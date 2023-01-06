import React from 'react';
import styled from "styled-components";
import img from "./../../img/redplant.png";


const Tarifs = () => {
  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle>En pratique</HeroTitle>
      </Hero>
      <HeroSubTitle>Tarifs des consultations</HeroSubTitle>
      <HeroSubText></HeroSubText>
      <Section>
        <SectionItem>
          <Title>Les consultations</Title>
          </SectionItem>
      </Section>
    </>
  );
}

export default Tarifs

const Hero = styled.div``

const HeroBackgroundImg = styled.div`
  height: 800px;
  width: 100%;
  display: fixed;
  filter: blur(3px);
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  /* background-size: cover; */
  background-position: center;
`;

const HeroTitle = styled.h3``
const HeroSubTitle = styled.p``

const HeroSubText= styled.p``


const Section = styled.div`
  width: 100wv;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  column-gap: 1.5rem;
  margin: 1rem;
`;
const SectionItem = styled.div``

const Title= styled.h3`
  
`

