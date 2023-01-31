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
  SubTilteWhy,
  SubTilteBooking,
  Title,
  TitleWhy,
  TitleBooking,
  SectionItem,
  Section,
  HeroSubText,
  HeroTitle1,
  HeroTitle2,
  HeroText,
  Ici,
  InfoText,
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
        <HeroTitle1>{t("home.HeroTitle1")}</HeroTitle1>
        <HeroTitle2>{t("home.HeroTitle2")}</HeroTitle2>
        <HeroText></HeroText>
      </Hero>
      <Page>
        <HeroSubText>{t("home.HeroSubText")}</HeroSubText>

        <div>
          <Section>
            <SectionItem>
              <Title>{t("home.Title")}</Title>
              <SubTilte>{t("home.SubTilte")}</SubTilte>
              <ReadMore onClick={navigateToAbout}>
                <InfoText>{t("home.InfoText")}</InfoText>
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
                <InfoText>{t("home.InfoText")}</InfoText>
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
