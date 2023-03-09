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
  @media (max-width: 600px) {
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
  @media (max-width:600px) {
    height: 100%;
    width: 100%;
    display: flex;
    float:left;
  }
`;

const Page = styled.div`
  padding: 1rem;
  h1,
  h2 {
    font-size: 28px;
    font-family:font-family: 'PT Sans', sans-serif;
    color: #4b4646;
    line-height: 35px;
  },
    h3,
  h4,
  h5,
  p {
    color: #4b4646;
    line-height: 35px;
    font-size: 22px;
    font-family:font-family: 'PT Sans', sans-serif;
  }
  @media (max-width: 600px) {
    h1,
    h2{
      font-size: 18px;
    }
    h4,
    h5,
    p {
      font-size: 16px;
      width: 100%;
    }
  }
`;

export { Hero, SectionBackgroundImg, Page };
