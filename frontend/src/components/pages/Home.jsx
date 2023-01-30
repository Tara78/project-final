import React from "react";
import styled from "styled-components";
import img from "./../../img/Stons.png.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import WhyPage from "./Why";
import Tarif from "./Tarif";
import Login from "./Login";
import { Hero, SectionBackgroundImg, Page } from "../Base";
import {
  ReadMore,
  SubTilte,
  Title,
  SectionItem,
  Section,
  HeroSubText,
  HeroTitle1,
  HeroTitle2,
  HeroText,
  Ici,
  InfoText,
} from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToWhy = () => {
    navigate("/why");
  };

  const navigateToTarif = () => {
    navigate("/tarif");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle1>DEVIENS QUI TU ES</HeroTitle1>
        <HeroTitle2>AVEC LE SOUTIEN DE LA GESTALT-THERAPIE</HeroTitle2>
        <HeroText></HeroText>
      </Hero>
      <Page>
        <HeroSubText>
          La Gestalt-thérapie est née aux Etats-Unis dans les années 50 et est
          connue en Europe depuis les années 70. C'est Fritz Perls, psychologue
          allemand qui a mis au point cette thérapie dont le nom "Gestalt"
          signifie en allemand prendre forme, se construire. Ici, on ne se
          demande donc pas pourquoi on souffre, mais comment est-on arrivé à
          cette souffrance et on place la personne qui vient consulter au cœur
          de sa propre reconstruction.
        </HeroSubText>

        <div>
          <Section>
            <SectionItem>
              <Title>Quels sont les principes de la Gestalt?</Title>
              <SubTilte>
                Cette thérapie a pour but de ne pas penser l'être humain en tant
                qu'individu, mais s'intéresse aux interactions : la façon dont
                nous entrons en contact avec nous-même, avec les autres, mais
                aussi avec le monde.
              </SubTilte>
              <ReadMore onClick={navigateToAbout}>
                <InfoText>En savoir plus ...</InfoText>
              </ReadMore>

              <Routes>
                <Route path="/about" element={<About />} />
              </Routes>
            </SectionItem>

            <SectionItem>
              <Title>Pourquoi choisir la Gestalt-thérapie?</Title>
              <div>
                <SubTilte>
                  Problématiques adultes, adolescents, enfants, couple, famille,
                  professionnelles.
                </SubTilte>
              </div>
              <ReadMore onClick={navigateToWhy}>
                <InfoText>En savoir plus ...</InfoText>
              </ReadMore>
              <Routes>
                <Route path="/why" element={<WhyPage />} />
              </Routes>
            </SectionItem>
            <SectionItem>
              <Title>Infos pratiques et prise de rdv</Title>
              <SubTilte>
                Si vous avez des questions préalables, n'hésitez pas à me
                contacter par téléphone pour clarifier vos besoins et vous
                décider vers cette solution thérapeutique.
              </SubTilte>
              <ReadMore onClick={navigateToTarif}>
                Infos pratiques - cliquer <Ici> ici</Ici>
              </ReadMore>
              <Routes>
                <Route path="/tarif" element={<Tarif />} />
              </Routes>
              <ReadMore onClick={navigateToLogin}>
                Prise de RDV -  cliquer <Ici> ici</Ici>
              </ReadMore>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </SectionItem>
          </Section>
        </div>
      </Page>
    </>
  );
};

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${img});
  filter: blur(2px);
`;

export default Home;
