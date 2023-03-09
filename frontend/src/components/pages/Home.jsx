import React from "react";
import styled from "styled-components";
import img from "./../../img/newstons.jpg";
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
        <HeroBackgroundImg alt="home page image"></HeroBackgroundImg>
        <HeroHomeTitle1>{t("home.HeroHomeTitle1")}</HeroHomeTitle1>
        <HeroHomeTitle2>{t("home.HeroHomeTitle2")}</HeroHomeTitle2>
        <HeroHomeText></HeroHomeText>
      </Hero>
      <Page>
        <HeroHomeSubText>{t("home.HeroHomeSubText")}</HeroHomeSubText>

        <div>
          <Section>
            <SectionItem>
              <TitleHome type="text">{t("home.TitleHome")}</TitleHome>
              <SubTilteHome type="text">{t("home.SubTilteHome")}
              </SubTilteHome>
              <ReadMore onClick={navigateToAbout}>
                <InfoTextHome type="text">{t("home.InfoText")}</InfoTextHome>
              </ReadMore>

              <Routes>
                <Route
                  path="/about"
                  type="navigate to About page"
                  element={<About />}
                />
              </Routes>
            </SectionItem>

            <SectionItem>
              <TitleWhy type="text">{t("home.TitleWhy")}</TitleWhy>
              <div>
                <SubTilteWhy type="text">{t("home.SubTilteWhy")}</SubTilteWhy>
              </div>
              <ReadMore onClick={navigateToWhy}>
                <InfoTextHome>{t("home.InfoText")}</InfoTextHome>
              </ReadMore>
              <Routes>
                <Route
                  path="/why"
                  type="navigate to Why page"
                  element={<WhyPage />}
                />
              </Routes>
            </SectionItem>
            <SectionItem>
              <TitleBooking type="text">{t("home.TitleBooking")}</TitleBooking>
              <SubTilteBooking>{t("home.SubTilteBooking")}</SubTilteBooking>
              <ReadMoreTarif onClick={navigateToTarif}>
                {t("home.ReadMoreTarif")} <Ici> {t("home.Ici")}</Ici>
              </ReadMoreTarif>
              <Routes>
                <Route
                  path="/tarif"
                  type="navigate to Tarif page"
                  element={<Tarif />}
                />
              </Routes>
              <ReadMoreBooking onClick={navigateToLogin}>
                {t("home.ReadMoreBooking")} <Ici> {t("home.Ici")}</Ici>
              </ReadMoreBooking>
              <Routes>
                <Route
                  path="/login"
                  type="navigate to Login page"
                  element={<Login />}
                />
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
