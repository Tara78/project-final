import styled from "styled-components";

const Hero = styled.div`
  height: 400px;
  width: 100%;
  color: #621010;
  text-shadow: 1px 0 #621010;
  position: relative;
  margin-bottom: 1.5rem;
  margin: auto 0px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 80%;
  }
`;

const SectionBackgroundImg = styled.div`
  height: 100%;
  width: 100%;
  display: fixed;
  filter: blur(1px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    display: flex;
  }
`;

const Page = styled.div`
  padding: 1rem;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #4b4646;
    line-height: 29px;
    font-size: 22px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  @media (max-width: 375px) {
    h1,
    h2,
    h4,
    h5 {
      font-size: 15px;
      width: 90%;
    }
  }
`;

export { Hero, SectionBackgroundImg, Page };
