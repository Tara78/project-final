import styled from "styled-components";


export const HeroHomeTitle1 = styled.h1`
  z-index: 32;
  position: absolute;
  top: 0;
  left: 20px;
  letter-spacing: 3px;
  `;

export const HeroHomeTitle2 = styled.h2`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
  line-height: 1.5;
  font-style: italic;
  position: absolute;
  color: #3b0d0d;
  top: 90px;
  left: 0;
  margin-left: 20px;
  letter-spacing: 2px;

 /*  @media (min-width: 375px) {
    width: 100%;
    font-size: 17px;
    line-height: 28px;

  } */
`;
export const HeroHomeText = styled.p`
  /* font-size: 22px;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 0; */
`;

export const HeroHomeSubText = styled.p`
  color: #052a64;
  /* font-family: "Poppins", sans-serif; */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
    
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
  margin-bottom: 1.5rem;
  font-size: 22px; font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  line-height: 32px;
  text-align: start;
  box-shadow: 0 9px 4px #92959a;

  @media (width: 375px) {
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
    padding-bottom: 1rem;
  }
`;

export const TitleHome = styled.h3`
  color: #621010;
  text-shadow: .5px 0 #621010;
  font-size: 18px;
  letter-spacing: 1px;
  @media (width: 375px) {
    font-size: 15px;
  }
`;

export const TitleWhy = styled.h3`
  color: #621010;
  text-shadow: 0.5px 0 #621010;
  font-size: 18px;
  letter-spacing: 1px;
  @media (width: 375px) {
    font-size: 15px;
  }
`;

export const TitleBooking = styled.h3`
  color: #621010;
  text-shadow: 0.5px 0 #621010;
  font-size: 18px;
  letter-spacing: 1px;
  @media (width: 375px) {
    font-size: 15px;
  }
`;

export const SubTilteHome = styled.p`
  color: #242426;
  height: 150px;
  margin-block: 0;
    @media (width: 375px) {
    font-size: 17px;
  }
`;
export const SubTilteWhy = styled.p`
  color: #242426;
  height: 150px;
  margin-block: 0;
  @media (width: 375px) {
    font-size: 17px;
  }
`;

export const SubTilteBooking = styled.p`
  color: #242426;
  height: 150px;
  margin-block: 0;
  @media (width: 375px) {
    font-size: 17px;
  }
`;
export const Ici = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 7px;
  /* text-shadow: 1px 0 #621010; */
`;

export const InfoTextHome = styled.p`
  cursor: pointer;
  margin-block: 0;
  @media (width: 375px) {
    font-weight: bold;
  }
`;

export const ReadMore = styled.div`
  color: #621010;
  /* text-shadow: 0.5px 0 #621010; */
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media (width: 375px) {
    font-weight: bold;
    padding-top: 1rem;
    }
`;

export const ReadMoreTarif = styled.div`
  color: #621010;
  /* text-shadow: 0.5px 0 #621010; */
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media (width: 375px) {
    font-weight: bold;
  }
`;

export const ReadMoreBooking = styled.div`
  color: #621010;
  /* text-shadow: 0px 0 #621010; */
  display: flex;
  padding-top: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media (width: 375px) {
    padding-top: 10px;
    font-weight: bold;
  }
`;

