import styled from "styled-components";

export const ReadMore = styled.div`
  color: #621010;
  display: flex;
`;
export const HeroText = styled.p`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 0;
`;
export const HeroTitle1 = styled.h1`
  z-index: 28;
  position: absolute;
  top: 0;
  left: 20px;
`;
export const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 90px;
  left: 0;
  margin-left: 20px;

  @media (min-width: 375px) {
    width: 80%;
    font-size: 17px;
    line-height: 28px;
    color: #250303;
    font-weight: bold;
  }
`;

export const HeroSubText = styled.h4`
  color: #052a64;
  display: flex;
  justify-content: center;
  font-size: 20px;
  line-height: 29px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 1.5rem;

  @media (width: 375px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  column-gap: 1.5rem;
  line-height: 29px;
  margin-top: 3rem;
`;

export const SectionItem = styled.div`
  margin-bottom: 1rem;
  font-size: 22px;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  line-height: 32px;
  text-align: start;

  @media (width: 375px) {
    width: 65%;
    height: auto;
    font-size: 16px;
    padding: 10px;
  }
`;

export const Title = styled.h3`
  color: #621010;
 
  font-size: 18px;
   @media (width: 375px) {
     font-size: 16px;
   }
`;

export const SubTilte = styled.p`
  color: #242426;
  height: 150px;
  margin-block: 0;
`;

export const Ici = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 7px;
`;

export const InfoText = styled.p`
  cursor: pointer;
  margin-block: 0;
`;

