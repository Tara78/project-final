import React from "react";
import styled from "styled-components";
import img from "./../../img/redplant.png";
import { Hero, SectionBackgroundImg, Page } from "../Base";

const Tarif = () => {
  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle1>En pratique</HeroTitle1>
      </Hero>
      <Page>
        <Section>
          <Title>Les consultations</Title>
          <Price>
            chaque consultation dure environ 1 heure et est facturée 70€.
          </Price>
        </Section>
      </Page>
    </>
  );
};

const HeroTitle1 = styled.h1`
  position: absolute;
  top: 5;
  left: 20px;
`;

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  filter: blur(3px);
  background-image: url(${img});
`;

const Section = styled.div`
  width: 100wv;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: #2e2e2e;
`;
const Title = styled.h2`
  padding-top: 1rem;
`;

const Price = styled.p`
  font-size: 22px;
`;

export default Tarif;
