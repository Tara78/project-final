import React from "react";
import styled from "styled-components";
import img from "./../../img/photo-boush.avif";
import { Hero, SectionBackgroundImg, Page } from "../Base";
import { useTranslation } from "react-i18next";

const Tarif = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
    <HeroTitle1>{t("tarif.HeroTitle1")}</HeroTitle1> 
      </Hero>
      <Page>
        <Section>
         {/** <Title>{t("tarif.Title")}</Title> */}
          <Price>{t("tarif.Price")}</Price>
        </Section>
      </Page>
    </>
  );
};

const HeroTitle1 = styled.h1`
  position: absolute;
  top: 5;
  left: 12px;
  letter-spacing:2px;
  @media only screen and (max-width: 600px) {
    position:relative; 
  }
`;

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  
  background-image: url(${img});
`;

const Section = styled.div`
  width: 100wv;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: #2e2e2e;
  margin-right: 2rem;
 
`;

const Title = styled.h2`
  padding-top: 2rem;
  letter-spacing:1px;
`;

const Price = styled.h2`
  padding-top: 2.5rem;
  font-size: 32px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing:.5px;
  @media (min-width: 375px) {
    font-size: 1.2rem;
  }
`;

export default Tarif;
