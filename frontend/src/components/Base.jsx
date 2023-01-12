import styled from "styled-components";

const Hero = styled.div`
  height: 300px;
  width: 100vw;
  color: #621010;
  position: relative;
  margin-bottom: 1rem;
`;

const SectionBackgroundImg = styled.div`
  height: 300px;
  width: 100%;
  display: fixed;
  filter: blur(1px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Page= styled.div`
  padding: 1rem;
`

export { Hero, SectionBackgroundImg, Page }