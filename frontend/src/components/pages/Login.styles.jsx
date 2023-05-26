import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const FormWrapper = styled.div`
  width: 35%;
  height: auto;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfd6e1;
  box-shadow: 4px 8px 8px #88989f;
  font-family: "Inconsolata";
  font-size: 18px;
  border-radius: 8px;
  z-index: 28;
  position: absolute;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    padding: 1rem;
    margin-right: 1.2rem;
    margin-top: 10%;
  }
  @media only screen and (max-width: 1200px) {
    width: 85%;
    hight:auto;
  }
`;

export const Label = styled.label`
  display: flex;
  input {
    font-family: "Inconsolata";
    font-size: 16px;
    width: 30px;

  }
  @media screen and (max-width: 600px) {
    
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 15px; */
`;

export const LabelText = styled.p`
  margin: 15px;
  width: 80px;
  text-align: right;
  color: hsl(0deg 0% 13% / 80%);
  text-shadow: .5px 0 #621010;
  letter-spacing:.5px;
`;

export const Button = styled.button`
  font-family: "Inconsolata";
  font-size: 18px;
  padding: 6px 15px;
  box-shadow: 0 9px #92959a;
  background-color: #d1d6de;
  border: none;
  width: 150px;
  margin: 15px 30px 30px;
  cursor: pointer;
  color: #413e3e;
  /* text-shadow: 1px 0 #621010; */
  margin-top: 4rem;
  border-radius: 8px;
  font-weight: bold;
  letter-spacing:.5px;

  &:hover {
    background-color: #d1d8dc;
  }

  &:active {
    background-color: #97b0cc;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Section = styled.div`
  width: 80vw;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;
export const TextError = styled.p`
  font-weight: bold;
  color: red;
`;
