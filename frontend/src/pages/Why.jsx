import React from "react";
import styled from "styled-components";
import imgGustald from "../img/Gustald-tree.jpg";
import imgWhy from "../img/consultimg.png"
import { Hero, SectionBackgroundImg, Page } from "../components/Base";

const WhyPage = () => {
  return (
    <>
      <Hero>
        <Section1BackgroundImg></Section1BackgroundImg>
      </Hero>
      <Page>
        <h1>Pourquoi choisir la Gestalt-thérapie ?</h1>
        <SectionSubTitle>
          La Gestalt-thérapie s'adresse à tous, adultes, adolescents ou enfants
          pour traiter:
          <p>
            <BoldText>• des problèmes relationnels: </BoldText>
            timidité, sentiment d’exclusion.
          </p>
          <p>
            <BoldText>• des problèmes affectifs: </BoldText>
            problème de couple, séparation difficile, deuil.
          </p>
          <p>
            <BoldText>• des troubles de conduites alimentaires.</BoldText>
          </p>
          <p>
            <BoldText>• des troubles psychiques: </BoldText>
            anxiété, dépression, troubles bipolaires, troubles psychosomatiques.
          </p>
          <p>
            <BoldText>• des troubles émotionnels: </BoldText>stress, angoisse.
          </p>
          <p>
            <BoldText>• des situations issues du monde professionnel: </BoldText>
            harassement, chômage, sens du travail,…
          </p>
        </SectionSubTitle>
        <WhyGustaldText>
          A partir de la problématique de la personne qui vient consulter,
          l’idée poursuivie est non seulement de lui permettre de mieux faire
          face à celle-ci mais également de lui permettre de reprendre sa vie en
          main, s'affirmer, s'épanouir, trouver son potentiel dans ce que l’on
          appelle le
          <BoldText> développement personnel.</BoldText>
        </WhyGustaldText>

        <Hero>
          <Section2BackgroundImg></Section2BackgroundImg>
        </Hero>
        <SectionSubTitle>
          <h1>Comment se déroule une séance de Gestalt-thérapie?</h1>
          <SectionSubTitle>
            La Gestalt-thérapie se pratique donc de manière individuelle ou en
            groupe, c'est le thérapeute qui décide de la forme de la thérapie la
            mieux adaptée à la situation du patient. Elle fait partie des
            thérapies à moyen ou long terme puisqu'en général elle nécessite une
            séance tous les 15 jours sur une durée généralement comprise entre 6
            et 12 mois. Après quelques mois, la personne qui consulte commence à
            ressentir un mieux dans ses relations et dans sa vie quotidienne et
            il est alors important qu’elle s’assure que ses acquis sont
            consolidés de façon pérenne.
          </SectionSubTitle>
          <h3>Une séance de cette thérapie s'organise sur 3 axes:</h3>
          <p>
            <BoldText> • La verbalisation: </BoldText>
            la personne évoque sa situation, son problème, le thérapeute l'aide
            à rester attentive à ses gestes et à ses émotions
          </p>

          <p>
            <BoldText> • L’expérimentation: </BoldText>
            jeux de rôle ou créativité artistique pour noter la façon dont le
            patient interagit avec lui-même, les autres ou les objets.
          </p>
          <p>
            <BoldText>• Le changement: </BoldText>
            en fonction de la deuxième phase, le thérapeute recherche les pistes
            pour mener à un changement à amorcer afin d'équilibrer les contacts
            et les relations entre la personne et son environnement
          </p>
        </SectionSubTitle>
      </Page>
    </>
  );
};

const Section1BackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${imgGustald});
`;

const SectionSubTitle = styled.div`
  line-height: 39px;
  color: #272525;
`;

const WhyGustaldText = styled.p`
  font-size: 20px;
  margin-bottom: 4rem;
  line-height: 39px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Section2BackgroundImg = styled(SectionBackgroundImg)`
  background-image: url(${imgWhy});
`;

export default WhyPage;
