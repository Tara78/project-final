import React from 'react';
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle>Contact</HeroTitle>
        <HeroSubText>
          Les rdv se prennent de vive voix au 06 23 16 65 75 ou en ligne.
        </HeroSubText>
        <HeroText>
          Pour les commandes de livres dédicacés et tout autre sujet,
          envoyez-moi un message via le formulaire ci-dessous.
        </HeroText>
      </Hero>

      <WrapperSecondPart>
        <SectionForm>

        </SectionForm>
        <SectionContactInfo>

        </SectionContactInfo>

      </WrapperSecondPart>
    </div>
  );
}

export default Contact
const Hero= styled.div`
  
`
const HeroBackgroundImg= styled.div`
  
`

const HeroTitle= styled.h1`
  
`
const HeroSubText= styled.h5`
  
`

const HeroText = styled.p`
`;

const WrapperSecondPart = styled.div`
  width: 95%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  column-gap: 2.5rem;
  /* background-color: #435aa6; */
  
`;

const SectionForm = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #e6e8ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const SectionContactInfo = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #e6e8ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;