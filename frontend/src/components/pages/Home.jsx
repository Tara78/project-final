import React from "react";
import styled from "styled-components";
import img from "./../../img/Stons.png.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import WhyPage from "./Why";
import Tarif from "./Tarif";
import Login from "./Login";
import { Hero, SectionBackgroundImg, Page } from "../Base";

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
              <ReadMoreDiv>
                <ReadMore onClick={navigateToAbout}>
                  <InfoText>En savoir plus ...</InfoText>
                </ReadMore>

                <Routes>
                  <Route path="/about" element={<About />} />
                </Routes>
              </ReadMoreDiv>
            </SectionItem>

            <SectionItem>
              <Title>Pourquoi choisir la Gestalt-thérapie ?</Title>
              <SubTilte>
                Problématiques adultes, adolescents, enfants, couple, famille,
                professionnelles.
              </SubTilte>
              <ReadMoreDiv2>
                <ReadMore onClick={navigateToWhy}>
                  <InfoText>En savoir plus ...</InfoText>
                </ReadMore>
                <Routes>
                  <Route path="/why" element={<WhyPage />} />
                </Routes>
              </ReadMoreDiv2>
            </SectionItem>
            <SectionItem>
              <Title>Infos pratiques et prise de rdv</Title>
              <SubTilte>
                Si vous avez des questions préalables, n'hésitez pas à me
                contacter par téléphone pour clarifier vos besoins et vous
                décider vers cette solution thérapeutique.
              </SubTilte>
              <ReadMoreDiv>
                <ReadMore onClick={navigateToTarif}>
                  Infos pratiques - cliquer <Ici> ici</Ici>
                </ReadMore>
                <Routes>
                  <Route path="/tarif" element={<Tarif />} />
                </Routes>
                <ReadMore onClick={navigateToLogin}>
                  Prise de RdV - cliquer <Ici> ici</Ici>
                </ReadMore>
                <Routes>
                  <Route path="/login" element={<Login />} />
                </Routes>
              </ReadMoreDiv>
            </SectionItem>
          </Section>
        </div>
      </Page>
    </>
  );
};

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${img});
  filter: blur(3px);
`;

const HeroText = styled.p`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 0;
`;
const HeroTitle1 = styled.h1`
  z-index: 28;
  position: absolute;
  top: 0;
  left: 20px;
`;
const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 90px;
  left: 0;
  margin-left: 20px;

  @media (max-width: 375px) {
    width: 80%;
    font-size: 17px;
    line-height: 28px;
    color: #250303;
    font-weight: bold;
  }
`;

const HeroSubText = styled.h4`
  color: #052a64;
  display: flex;
  justify-content: center;
  font-size: 20px;
  line-height: 29px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 1.5rem;

  @media (width: 375px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  column-gap: 1.5rem;
  line-height: 29px;
  margin-top: 3rem;
`;

const SectionItem = styled.div`
  margin-bottom: 1rem;
  font-size: 22px;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  line-height: 32px;
  text-align: start;

  @media (width: 375px) {
    width: 70%;
    font-size: 18px;
    padding: 1rem;
  }
`;

const Title = styled.h3`
  color: #621010;
  padding-bottom: 1rem;
  font-size: 18px;
`;

const SubTilte = styled.p`
  color: #242426;
  padding-bottom: 1rem;
`;

const ReadMoreDiv = styled.div`
  height: 140px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const ReadMoreDiv2 = styled.div`
  height: 140px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;
const ReadMore = styled.div`
  color: #621010;
  display: flex;
`;

const Ici = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 7px;
`;

const InfoText = styled.p`
  cursor: pointer;
`;

export default Home;
