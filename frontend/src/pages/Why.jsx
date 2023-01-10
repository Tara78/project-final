import React from "react";
import styled from "styled-components";
import img from "./../img/Gustald-tree.jpg";
// /**/Second img */

const WhyPage = () => {
  return (
    <>
      <SectionWhy>
        <Section1BackgroundImg></Section1BackgroundImg>
        <SectionTitle>Pourquoi choisir la Gestalt-thérapie ?</SectionTitle>
        <SectionSubTitle>
          La Gestalt-thérapie s'adresse à tous, adultes, adolescents ou enfants
          pour traiter:
          <Span>
            • des problèmes relationnels: timidité, sentiment d’exclusion.
          </Span>
          <Span>
            • des problèmes affectifs: problème de couple, séparation difficile,
            deuil.
          </Span>
          <Span>• des troubles de conduites alimentaires.</Span>
          <Span>
            • des troubles psychiques: anxiété, dépression, troubles bipolaires,
            troubles psychosomatiques.
          </Span>
          <Span>• des troubles émotionnels : stress, angoisse.</Span>
          <Span>
            • des situations issues du monde professionnel : harassement,
            chômage, sens du travail,…
          </Span>
        </SectionSubTitle>
        <WhyGustaldText>
          A partir de la problématique de la personne qui vient consulter,
          l’idée poursuivie est non seulement de lui permettre de mieux faire
          face à celle-ci mais également de lui permettre de reprendre sa vie en
          main, s'affirmer, s'épanouir, trouver son potentiel dans ce que l’on
          appelle le
          <SpanWhy>développement personnel.</SpanWhy>
        </WhyGustaldText>
      </SectionWhy>
      <SectionHowWorks>
        <Section2Img></Section2Img>
        <SectionTitle>
          Comment se déroule une séance de Gestalt-thérapie?
        </SectionTitle>
        <SectionSubTitle>
          La Gestalt-thérapie se pratique donc de manière individuelle ou en
          groupe, c'est le thérapeute qui décide de la forme de la thérapie la
          mieux adaptée à la situation du patient. Elle fait partie des
          thérapies à moyen ou long terme puisqu'en général elle nécessite une
          séance tous les 15 jours sur une durée généralement comprise entre 6
          et 12 mois. Après quelques mois, la personne qui consulte commence à
          ressentir un mieux dans ses relations et dans sa vie quotidienne et il
          est alors important qu’elle s’assure que ses acquis sont consolidés de
          façon pérenne.
        </SectionSubTitle>
        <ThreeDSection>
          Une séance de cette thérapie s'organise sur 3 axes:
        </ThreeDSection>
        <ThreeDText>
          • La verbalisation:
          <Span3DText>
            la personne évoque sa situation, son problème, le thérapeute
            l'aide à rester attentive à ses gestes et à ses émotions
          </Span3DText>
        </ThreeDText>

        <ThreeDText>
          • L’expérimentation :
          <Span3DText>
            jeux de rôle ou créativité artistique pour noter la façon dont le
            patient interagit avec lui-même, les autres ou les objets.
          </Span3DText>
        </ThreeDText>
        <ThreeDText>
          • Le changement:
          <Span3DText>
            en fonction de la deuxième phase, le thérapeute recherche les pistes
            pour mener à un changement à amorcer afin d'équilibrer les contacts
            et les relations entre la personne et son environnement
          </Span3DText>
        </ThreeDText>
      </SectionHowWorks>
    </>
  );
};

export default WhyPage;

const SectionWhy = styled.div``;
const SectionHowWorks = styled.div``;

const Section1BackgroundImg = styled.div`
  height: 400px;
  width: 100%;
  display: fixed;
  filter: blur(1px);
  background-image: url(${img});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: cover;
  /* background-position: center; */
`;

const SectionTitle = styled.h1``;
const SectionSubTitle = styled.p`
  font-size: 22px;
`;
const WhyGustaldText = styled.p`
  font-size: 22px;
`;
const Span = styled.p`
  font-size: 22px;
`;
const SpanWhy= styled.p`
font-weight:bold;
`

const Section2Img = styled.div`
  /* background-image: = url(); */
`;
const ThreeDSection= styled.h5`
  
`

const ThreeDText= styled.p``

const Span3DText= styled.p``;

