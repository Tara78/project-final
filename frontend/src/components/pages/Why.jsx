import React from "react";
import styled from "styled-components";
import imgGustald from "./../../img/Gustald-tree.jpg";
import imgWhy from "./../../img/consultimg.png";
import { Hero, SectionBackgroundImg, Page } from "../Base";
import {
  Title,
  SubTitle,
  SectionSubTitle,
  WhyGustaldText,
  BoldText,
  Point,
  TitleHow,
  Title2How,
  SubTitleHow,
  Paragrah1,
  Paragrah2,
  Paragrah3,
} from "./Why.styles";
import { useTranslation } from "react-i18next";

const WhyPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero>
        <Section1BackgroundImg alt="Gushtald tehory image,you can see yourself in diffrent angles"></Section1BackgroundImg>
      </Hero>
      <Page>
        <Title type="text">{t("why.Title")}</Title>
        <SectionSubTitle>
          <SubTitle type="text"> {t("why.SubTitle")}</SubTitle>
          <Point>
            <BoldText type="text"> {t("why.BoldText1")} </BoldText>
            {t("why.Point1")}
          </Point>
          <Point>
            <BoldText type="text">{t("why.BoldText2")}</BoldText>
            {t("why.Point2")}
          </Point>
          <Point>
            <BoldText type="text">{t("why.BoldText3")}</BoldText>
          </Point>
          <Point>
            <BoldText type="text">{t("why.BoldText4")}</BoldText>
            {t("why.Point4")}
          </Point>
          <Point>
            <BoldText type="text">{t("why.BoldText5")} </BoldText>
            {t("why.Point5")}
          </Point>
          <Point>
            <BoldText type="text">{t("why.BoldText6")}</BoldText>
            {t("why.Point6")}
          </Point>
        </SectionSubTitle>
        <WhyGustaldText type="text">
          {t("why.WhyGustaldText")}
          <BoldText> {t("why.BoldTextWhy")}</BoldText>
        </WhyGustaldText>

        <Hero>
          <Section2BackgroundImg alt="psychotrapist is  listening to his client"></Section2BackgroundImg>
        </Hero>
        <SectionSubTitle>
          <TitleHow>{t("how.TitleHow")}</TitleHow>
          <SubTitleHow>{t("how.SubTitleHow")}</SubTitleHow>
          <Title2How>{t("how.Title2How")}</Title2How>
          <Paragrah1>
            <BoldText> {t("how.BoldText1")}</BoldText>
            {t("how.Paragrah1")}
          </Paragrah1>

          <Paragrah2>
            <BoldText>{t("how.BoldText2")} </BoldText>
            {t("how.Paragrah2")}
          </Paragrah2>
          <Paragrah3>
            <BoldText>{t("how.BoldText3")}</BoldText>
            {t("how.Paragrah3")}
          </Paragrah3>
        </SectionSubTitle>
      </Page>
    </>
  );
};

const Section1BackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${imgGustald});
`;

const Section2BackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${imgWhy});
`;

export default WhyPage;
