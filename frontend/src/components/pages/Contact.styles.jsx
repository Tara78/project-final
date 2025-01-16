import styled from "styled-components";

export const WrapperSecondPart = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
  column-gap: 2.5rem;
  margin-top: 2rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width:100%;
  }
  @media only screen and (max-width: 1200px) {
    grid-gap: 2rem;
  `;

export const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const AppointmentsInfo = styled.p`
  font-size: 20px;
  color: #343131;
  padding-top: 10px;
  letter-spacing: 0.5px;
`;

export const SectionItem = styled.div`
  height: 600px;
  font-size: 22px;
  border-radius: 15px;
  background-color: #edf1f3;
  box-shadow: 0 3px 3px #92959a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  line-height: 32px;
  text-align: start;

  @media only screen and (max-width: 600px) {
    padding: 0;
    height: auto;
  }
`;

export const Textarea = styled.textarea`
  &::placeholder {
    font-size: 14px;
  }
  height: 200px;
  margin: 1rem;
  box-shadow: 0 3px 3px #92959a;
  border: none;
  border-radius: 10px;
  font-size: bold;
  padding-top: 1rem;
  padding-left: 1rem;

  @media only screen and (max-width: 600px) {
    margin: 0;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const SectionItemDetails = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #555151;
  font-size: 28px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const Address = styled.h5`
  margin-top: 2rem;
  letter-spacing: 1px;
`;
export const AddressStreet= styled.h5;

export const Tarifs = styled.div`
  padding: 1rem;
  font-size: 22px;
  margin-top: 2rem;
  dislay: flex;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    dislay: flex;
    align-items: center;
  }
`;


export const ReadMoreTarif = styled.span`
  font-size: 22px;
  width: 90%;
  dislay: flex;
  text-align: center;
  padding-left: 5px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Mobile = styled.p`
  font-size: 22px;
  padding-top: 2rem;
  text-shadow: #413e3e;
  letter-spacing: 1px;
  color: #555151;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const AddressDetaile = styled.p`
  margin-top: -1rem;
  letter-spacing: 0.5px;
`;
export const AddressDetaileCity = styled.p`
  margin-top: -1rem;
  letter-spacing: 0.5px;
`;

export const Email = styled.p`
  font-size: 22px;
  text-decoration: none;
  color: #555151;
  padding-bottom: 1rem;
  letter-spacing: 1px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Ici = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 7px;
  letter-spacing: 0.5px;
  /* text-shadow: 1px 0 #621010; */
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
  box-shadow: 0 3px 3px #92959a;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  width: 60%;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  &::placeholder {
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
    &::placeholder {
      font-size: 13px;
    }
  }
`;

export const InputButton = styled.button`
  height: 40px;
  width: 25%;
  font-size: 17px;
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
    border: none;
  }

  &:active {
    background-color: #b0becd;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  @media (max-width: 600px) {
    height: 40px;
    width: 40%;
    font-size: 15px;
    margin-top: 2rem;
  }
`;
