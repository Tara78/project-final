import React from "react";
import styled from "styled-components";
import img from "../img/Stons.png.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import WhyPage from "./Why";
import Tarif from "./Tarif";
import Login from "./Login";
import { Hero, SectionBackgroundImg, Page } from "../components/Base";

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
              <div>
                <ReadMore onClick={navigateToAbout}>
                  <InfoText>En savoir plus ...</InfoText>
                </ReadMore>

                <Routes>
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </SectionItem>

            <SectionItem>
              <Title>Pourquoi choisir la Gestalt-thérapie ?</Title>
              <SubTilte>
                Problématiques adultes, adolescents, enfants, couple, famille,
                professionnelles.
              </SubTilte>
              <div>
                <ReadMore onClick={navigateToWhy}>
                  <InfoText>En savoir plus ...</InfoText>
                </ReadMore>
                <Routes>
                  <Route path="/why" element={<WhyPage />} />
                </Routes>
              </div>
            </SectionItem>
            <SectionItem>
              <Title>Infos pratiques et prise de rdv</Title>
              <SubTilte>
                Si vous avez des questions préalables, n'hésitez pas à me
                contacter par téléphone pour clarifier vos besoins et vous
                décider vers cette solution thérapeutique.
              </SubTilte>
              <div>
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
              </div>
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
`;
const HeroSubText = styled.h4`
  /* width: 80%; */
  color: #052a64;
  display: flex;
  justify-content: center;
  font-size: 22px;
  line-height: 29px;
`;

const Section = styled.div`
  width: 100wv;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  column-gap: 1.5rem;
  margin: 1rem;
  line-height: 29px;
`;
const SectionItem = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const Title = styled.h3`
  font-size: 24px;
  color: #621010;
  padding-bottom: 1rem;
`;
const SubTilte = styled.p`
  font-size: 20px;
  color: #242426;
  padding-bottom: 1rem;
`;
const ReadMore = styled.p`
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
