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
        <HeroBackgroundImg></HeroBackgroundImg>
      </Hero>
      <Page>
        <TilteOne>{t("about.TilteOne")}</TilteOne>
        <HeroSubText> {t("about.HeroSubText")}</HeroSubText>
        <HeroSubSubText> {t("about.HeroSubSubText")}</HeroSubSubText>
        <TilteTwo>La théorie du self</TilteTwo>
        <SecondText>
          {t("about.SecondText")}
          <SecondTextSpan>{t("about.SecondTextSpan")}</SecondTextSpan>
        </SecondText>
        <TilteTree>{t("about.TilteTree")}</TilteTree>
        <ThirdPart>
          {t("about.ThirdPart")}
          <Point1>{t("about.Point1")}</Point1>
          <Point2>{t("about.Point2")}</Point2>
          <Point3>{t("about.Point3")}</Point3>
          <Point4>{t("about.Point3")}</Point4>
        </ThirdPart>
      </Page>
    </>
  );
};

const HeroBackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${img});
`;

export default About;
