import styled from "styled-components";

export const HeroText = styled.p`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 0;
`;
export const HeroTitle1 = styled.h1`
  z-index: 32;
  position: absolute;
  top: 0;
  left: 20px;
`;

export const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  text-shadow: 0 0;
  top: 90px;
  left: 0;
  margin-left: 20px;

  @media (min-width: 375px) {
    width: 80%;
    font-size: 17px;
    line-height: 28px;
    color: #250303;
  }
`;

export const HeroSubText = styled.h5`
  color: #052a64;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (width: 375px) {
    width: 100%;
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
  box-shadow: 0 9px 4px #92959a;

  @media (width: 375px) {
    width: 65%;
    height: auto;
    font-size: 16px;
    padding: 10px;
    margin-top: 1rem;
  }
`;

export const Title = styled.h3`
  color: #621010;
  text-shadow: .5px 0 #621010;
  font-size: 18px;
  @media (width: 375px) {
    font-size: 15px;
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
  text-shadow: 1px 0 #621010;
`;

export const InfoText = styled.p`
  cursor: pointer;
  margin-block: 0;
  @media (width: 375px) {
    font-weight: bold;
    padding: 10px;
  }
`;

export const ReadMore = styled.div`
  color: #621010;
  text-shadow: .5px 0 #621010;
  display: flex;
  padding-top: 2rem;
  @media (width: 375px) {
    padding-top: 10px;
    font-weight: bold;
  }
`;
