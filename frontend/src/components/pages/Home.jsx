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
  SubTilteHome,
  SubTilteWhy,
  SubTilteBooking,
  TitleHome,
  TitleWhy,
  TitleBooking,
  SectionItem,
  Section,
  HeroHomeSubText,
  HeroHomeTitle1,
  HeroHomeTitle2,
  HeroHomeText,
  Ici,
  InfoTextHome,
  ReadMoreTarif,
  ReadMoreBooking,
} from "./Home.styles";

import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
 
  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroHomeTitle1>{t("home.HeroHomeTitle1")}</HeroHomeTitle1>
        <HeroHomeTitle2>{t("home.HeroHomeTitle2")}</HeroHomeTitle2>
        <HeroHomeText></HeroHomeText>
      </Hero>
      <Page>
        <HeroHomeSubText>{t("home.HeroHomeSubText")}</HeroHomeSubText>

        <div>
          <Section>
            <SectionItem>
              <TitleHome>{t("home.TitleHome")}</TitleHome>
              <SubTilteHome>{t("home.SubTilteHome")}</SubTilteHome>
              <ReadMore onClick={navigateToAbout}>
                <InfoTextHome>{t("home.InfoText")}</InfoTextHome>
              </ReadMore>

              <Routes>
                <Route path="/about" element={<About />} />
              </Routes>
            </SectionItem>

            <SectionItem>
              <TitleWhy>{t("home.TitleWhy")}</TitleWhy>
              <div>
                <SubTilteWhy>{t("home.SubTilteWhy")}</SubTilteWhy>
              </div>
              <ReadMore onClick={navigateToWhy}>
                <InfoTextHome>{t("home.InfoText")}</InfoTextHome>
              </ReadMore>
              <Routes>
                <Route path="/why" element={<WhyPage />} />
              </Routes>
            </SectionItem>
            <SectionItem>
              <TitleBooking>{t("home.TitleBooking")}</TitleBooking>
              <SubTilteBooking>{t("home.SubTilteBooking")}</SubTilteBooking>
              <ReadMoreTarif onClick={navigateToTarif}>
                {t("home.ReadMoreTarif")} <Ici> {t("home.Ici")}</Ici>
              </ReadMoreTarif>
              <Routes>
                <Route path="/tarif" element={<Tarif />} />
              </Routes>
              <ReadMoreBooking onClick={navigateToLogin}>
                {t("home.ReadMoreBooking")} <Ici> {t("home.Ici")}</Ici>
              </ReadMoreBooking>
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
