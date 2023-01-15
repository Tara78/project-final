import styled from "styled-components";

const Hero = styled.div`
  height: 400px;
  width: 100%;
  color: #621010;
  position: relative;
  margin-bottom: 1.5rem;
   margin: auto 0px; 
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

  @media (max-width: 768px) {
    
  }
`;

export { Hero, SectionBackgroundImg, Page }

