import React from "react";
import styled from "styled-components";
import img from "./../../img/Stons.png.jpg";

const Home = () => {
  return (
    <div>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle>Psychothérapie brève</HeroTitle>
        <HeroText>
          Pacifier toutes les parts de vous-m'aime, apaiser les blessures du
          passé et déployer votre potentiel avec la maïeusthésie
        </HeroText>
      </Hero>
      <HeroSubText>
        Vous vivez un conflit qui s'éternise, un état apathique, un deuil qui
        n'en fini pas, des schémas répétitifs qui vous limitent, vous vous
        sentez coincé.e dans un eco-système familial ou professionnel, vous
        luttez contre une dépendance, des états émotionnels ou des comportements
        qui vous desservent... Vous êtes bloqué.e dans une situation, subissez
        des schémas transgénérationnels, vous êtes fatigué.e de vos croyances
        limitantes... autant de motifs pour choisir la psychothérapie brève.
      </HeroSubText>
      <HeroSubSubText>
        C'est votre dialogue intérieur que j'accompagne, avec délicatesse. Vous
        allez rencontrer la part de vous qui, par une manifestation désagréable
        ou un symptôme, appelle votre attention. La reconnaître, la réhabiliter,
        la reconnecter aux autres parts de votre être vous ramène à l'unité et
        apaise les symptômes. Vous vous déployez alors pleinement dans le flow
        du vivant.
      </HeroSubSubText>

      <WrapperSecondPart>
        <Section>
          <SectionItem>
            <Title>Les consultations</Title>
             <SubTilte>
            La maïeusthésie se pratique en face à face, je vous accompagne par
            la parole sur un chemin intérieur de rencontre avec les parts de
            vous-même qui appellent à être vues, reconnues, réhabilitées, à ce
            moment-là.
            </SubTilte>
          </SectionItem>

          <SectionItem>
            <Title>Pour qui ? Pour quel trouble ?</Title>
            <SubTilte>
              La maïeusthésie est adaptée à tous les âges de la vie et à tous
              les types de troubles. Ceux-ci peuvent être précis ayant fait
              l'objet d'un diagnostic. Ce peut aussi être difficile à nommer,
              dans le domaine du.
            </SubTilte>
          </SectionItem>

          <SectionItem>
            <Title>Infos pratiques et prise de rdv</Title>
            <SubTilte>
              {/* <Link></Link> */}
              Si vous avez des questions préalables, je vous offre 30 minutes
              d'échange par téléphone afin de clarifier vos besoins et vous
              décider.
            </SubTilte>
          </SectionItem>
        </Section>
      </WrapperSecondPart>
    </div>
  );
};

export default Home;

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
  display:fixed;
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
const HeroTitle = styled.h1`
  z-index: 28;
  position: absolute;
  top: 0;
  left: 20px;
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

const WrapperSecondPart= styled.div`
  
`
const Section = styled.div`
  width: 100wv;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
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
