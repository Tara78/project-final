import React from "react";
import styled from "styled-components";
import img from "./../../img/enfant.jpg";
import { Hero, SectionBackgroundImg, Page } from "../Base";
import {
  HeroSubText,
  HeroSubSubText,
  TilteOne,
  TilteTwo,
  TilteTree,
  SecondText,
  SecondTextSpan,
  ThirdPart,
  Point1,
  Point2,
  Point3,
  Point4,
} from "./About.styles";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero>
        <HeroBackgroundImg alt="child hood problem image"></HeroBackgroundImg>
      </Hero>
      <Page>
        <TilteOne type="text">{t("about.TilteOne")}</TilteOne>
        <HeroSubText type="text"> {t("about.HeroSubText")}</HeroSubText>
        <HeroSubSubText type="text">{t("about.HeroSubSubText")}</HeroSubSubText>
        <TilteTwo type="text">{t("about.TitleTwo")}</TilteTwo>
        <SecondText>
          {t("about.SecondText")}
          <SecondTextSpan type="text">
            {t("about.SecondTextSpan")}
          </SecondTextSpan>
        </SecondText>
        <TilteTree type="text">{t("about.TilteTree")}</TilteTree>
        <ThirdPart type="text">
          {t("about.ThirdPart")}
          <Point1>{t("about.Point1")}</Point1>
          <Point2>{t("about.Point2")}</Point2>
          <Point3>{t("about.Point3")}</Point3>
          <Point4>{t("about.Point4")}</Point4>
        </ThirdPart>
      </Page>
    </>
  );
};

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${img});
`;

export default About;
