import styled from "styled-components";

export const WrapperSecondPart = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
  column-gap: 2.5rem;
  margin-top: 2rem;
`;

export const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

export const SectionItem = styled.div`
  height: 600px;
  margin-bottom: 1rem;
  font-size: 22px;
  border-radius: 10px;
  background-color: #edf1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  line-height: 32px;
  text-align: start;

  @media (width: 375px) {
    width: 48%;
    /* padding: 1rem; */
    font-size:18px;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  margin: 1rem;
  border: 1px solid #2e1eab;
  border-radius: 5px;
  font-size: bold;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export const Address = styled.h5`
  font-size: 22px;
  color: #413e3e;
  padding-top: 3rem;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;

export const Tarifs = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #413e3e;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;

export const Mobile = styled.p`
  font-size: 22px;
  padding-top: 5rem;
`;

export const AddressDetaile = styled.p`
  font-size: 22px;
  margin-top: -20px;
`;

export const Email = styled.p`
  font-size: 22px;
`;

export const Form = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Label = styled.label`
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "10px",
}))`
  color: #2e1eab;
  font-size: 1em;
  border: 1px solid;
  border-radius: 5px;
  width: 60%;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export const InputButton = styled.button`
  height: 50px;
  width: 30%;
  font-size: 22px;
  color: #413e3e;
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 1.3rem;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0 9px #92959a;
  background-color: #d1d6de;

  &:hover {
    background-color: #b2c0c8;
  }

  &:active {
    background-color: #b0becd;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  @media (max-width: 375px) {
    height: 30px;
    width: 30%;
    font-size: 15px;
  }
`;