import React from "react";
import styled from "styled-components";
import img from "./../img/Stons.png.jpg";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import WhyPage from "./Why";
import Tarif from "./Tarif";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToWhy = () => {
    navigate("/why");
  };
  // const navigateHome = () => {
  //   navigate("/");
  // };

  const navigateToTarif= () => {
    navigate("/tarif");
  }

  return (
    <div>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle1>DEVIENS QUI TU ES</HeroTitle1>
        <HeroTitle2>AVEC L’APPUI DE LA GESTALT-THERAPIE</HeroTitle2>
        <HeroText></HeroText>
      </Hero>
      <HeroSubText>
        La Gestalt-thérapie est née aux Etats-Unis dans les années 50 et est
        connue en Europe depuis les années 70. C'est Fritz Perls, psychologue
        allemand qui a mis au point cette thérapie dont le nom "Gestalt"
        signifie en allemand prendre forme, se construire. Ici, on ne se demande
        donc pas pourquoi on souffre, mais comment est-on arrivé à cette
        souffrance et on place la personne qui vient consulter au cœur de sa
        propre reconstruction.
      </HeroSubText>
      <HeroSubSubText>Additional text</HeroSubSubText>

      <WrapperSecondPart>
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
              <Button onClick={navigateToAbout}>En savoir plus ... </Button>

              <Routes>
                <Route path="/about" element={<About />} />
                {/* <Route path="/" element={<Home/>}/> */}
              </Routes>
            </div>
          </SectionItem>

          <SectionItem>
            <Title>Pour qui ? Pour quel trouble ?</Title>
            <SubTilte>
              La maïeusthésie est adaptée à tous les âges de la vie et à tous
              les types de troubles. Ceux-ci peuvent être précis ayant fait
              l'objet d'un diagnostic. Ce peut aussi être difficile à nommer,
              dans le domaine du.
            </SubTilte>
            <div>
              <ReadMore onClick={navigateToWhy}>En savoir plus ... </ReadMore>
              <Routes>
                <Route path="/why" element={<WhyPage />} />
              </Routes>
            </div>
          </SectionItem>

          <SectionItem>
            <Title>Infos pratiques et prise de rdv</Title>
            <SubTilte>
              Si vous avez des questions préalables, je vous offre 30 minutes
              d'échange par téléphone afin de clarifier vos besoins et vous
              décider.
            </SubTilte>
            <div>
              <ReadMore onClick={navigateToTarif}>
                Pratiques et prise ici
              </ReadMore>

              <Routes>
                <Route path="/tarif" element={<Tarif />} />                
              </Routes>
            </div>
          </SectionItem>
        </Section>
      </WrapperSecondPart>
    </div>
  );
};

export default Home;

const Button = styled.div`
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 14px;
  color: #621010;
  &:hover {
    /* background-color: #d9dee1; */
    color: #951111;
  }
`;
const Hero = styled.div`
  height: 300px;
  width: 100vw;
  color: #621010;
  position: relative;
  margin-bottom: 1rem;
`;

const HeroBackgroundImg = styled.div`
  height: 300px;
  width: 100%;
  display: fixed;
  filter: blur(3px);
  background-image: url(${img});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: cover;
  background-position: center;
`;

const HeroText = styled.p`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  /* z-index: 28; */
  position: absolute;
  top: 50px;
  left: 0;
`;
const HeroTitle1 = styled.h1`
  z-index: 28;
  position: absolute;
  top: 0;
  left: 20px;
  /* margin-bottom: 3rem; */
`;
const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  /* z-index: 28; */
  position: absolute;
  top: 90px;
  left: 0;
`;
const HeroSubText = styled.h4`
  width: 80%;
  color: #052a64;
  display: flex;
  justify-content: center;
`;
const HeroSubSubText = styled.h4`
  width: 80%;
  color: #110738;
  display: flex;
  text-align: center;
`;

const WrapperSecondPart = styled.div``;
const Section = styled.div`
  width: 100wv;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  column-gap: 1.5rem;
  margin: 1rem;
`;
const SectionItem = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
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
`;
