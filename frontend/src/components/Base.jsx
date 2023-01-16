import styled from "styled-components";

const Hero = styled.div`
  height: 400px;
  width: 100%;
  color: #621010;
  position: relative;
  margin-bottom: 1.5rem;
  margin: auto 0px;
  font-family: "Nunito", sans-serif;
  
  @media (max-width: 375px) {
    width: 100%;
    font-size: 80%;
  }

`;

const SectionBackgroundImg = styled.div`
  height:100%;
  width: 100%;
  display: fixed;
  filter: blur(1px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
 
`;

const Page = styled.div`
  padding: 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 18px;

  @media (width: 375px) {
    width: 90%;
    font-size: 80%;


  }
/* 
  @media screen and (max-width: 820px) {
 width: 50%;
  } */
`;

export { Hero, SectionBackgroundImg, Page }

