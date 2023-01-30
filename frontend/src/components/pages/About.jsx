import React from "react";
import styled from "styled-components";
import img from "./../../img/enfant.jpg";
import { Hero, SectionBackgroundImg, Page } from "../Base";
import {HeroSubText, AboutSecondText, AboutSecondTextSpan, Point  } from "./About.styles"

const About = () => {
  return (
    <>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
      </Hero>
      <Page>
        <h1>Quels sont les principes de la Gestalt ?</h1>
        <HeroSubText>
          Cette thérapie a pour but de ne pas penser l'être humain en tant
          qu'individu, mais s'intéresse aux interactions : la façon dont nous
          entrons en contact avec nous-même, avec les autres, mais aussi avec le
          monde. Si l'intolérance règne, que ces contacts semblent être bloqués,
          tendus, froids, la Gestalt thérapie vise à remettre de la souplesse
          parce qu'en Gestalt, la personne est considérée comme inséparable de
          son environnement. Enfin, cette thérapie aide aussi à se concentrer
          sur le présent. Notamment quand nous sommes face à une difficulté. En
          effet, plutôt que de chercher les causes d'un problème, la
          Gestalt-thérapie invite la personne à se demander comment : quel est
          le processus qui l'a mené à cette situation. Contrairement à une
          thérapie classique, nul besoin ici de se pencher sur le passé, de
          reconstituer l'histoire du la personne, en demande sauf si les
          circonstances du moment présent le nécessitent. 
          <span>
            La Gestalt-thérapie met l'accent sur la prise de conscience du
            processus en cours, ce qui permet l'équilibre entre la personne qui
            vient consulter et son environnement. Elle s'intéresse au présent de
            chaque situation, c'est pourquoi on la classe dans le courant des
            psychologies humanistes ou existentielles.
          </span>
        </HeroSubText>

        <h1>La théorie du self</h1>
        <AboutSecondText>
          La théorie du self est à la base de la Gestalt-thérapie. Le self est
          notre manière d'être au monde. En effet, la Gestalt place la personne
          qui vient consulter au centre de son propre changement, elle en fait
          l'acteur principal. Il s'agit donc d'améliorer ses capacités à prendre
          soin de soi pour répondre à nos propres besoins, mais toujours en
          prenant en compte l'extérieur. C'est le plus important à comprendre :
          en Gestalt-thérapie, l'être humain ne peut jamais être indépendant de
          son environnement, il est indissociable de ce qui l'entoure, de son
          environnement et il l'influence autant qu'il est influencé par lui. Et
          c'est le plus important à comprendre :
          <AboutSecondTextSpan>
            en Gestalt-thérapie, la personne est acteur de son changement.
          </AboutSecondTextSpan>
        </AboutSecondText>
        <h2>L’ici et maintenant</h2>
        <AboutSecondText>
          C’est la seconde force de la Gestalt thérapie: s’appuyer sur le
          moment présent en:
          <Point>
            - Eveillant ses sens en observant attentivement ce qui se passe
            autour de soi.
          </Point>
          <Point>
            - Prenant du plaisir à toute chose ou en faisant en sorte de trouver
            des bénéfices à des choses qui à priori n’en ont pas.
          </Point>
          <Point>
            - Acceptant de lâcher prise, de ne pas vouloir toujours tout
            contrôler, anticiper. Le passé n’existe plus et le futur n’existe
            pas encore. Dès lors pourquoi ne pas se concentrer sur le moment
            présent fait de surprises et de bonheurs simples.
          </Point>
          <Point>
            - Favorisant les pensées positives car l’inconscient y est réceptif
            et par là la façon de se comporter en est affectée positivement.
          </Point>
        </AboutSecondText>
      </Page>
    </>
  );
};


const HeroBackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${img});
`;

export default About;
