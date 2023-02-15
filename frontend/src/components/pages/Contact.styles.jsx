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
export const AppointmentsInfo = styled.p`
  /* font-weight: bold; */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  color: #343131;
  padding-top: 10px;
  @media (min-width: 375px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const SectionItem = styled.div`
  height: 600px;
  margin-bottom: 1rem;
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

  @media (width: 375px) {
    width: 48%;
    font-size: 18px;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  margin: 1rem;
  box-shadow: 0 3px 3px #92959a;
  border: none;
  border-radius: 10px;
  font-size: bold;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export const SectionItemDetails = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  color: #555151;
  font-size: 28px;
`;
export const Address = styled.h5`
  font-size: 22px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
   margin-top: 2rem;
`;

export const Tarifs = styled.p`
  font-weight: bold;
  padding-top: 2rem;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;

// export const FontAwesomeIcon = styled.i`
//   font-size: 28px;
//   color: red;
// `;

export const Mobile = styled.p`
  font-size: 22px;
  padding-top: 2rem;
  text-shadow: #413e3e;
  @media (width: 375px) {
    padding-top: 1rem;
  }
`;

export const AddressDetaile = styled.p`
  margin-top: -1rem;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;
export const AddressDetaileCity = styled.p`
  margin-top: -1rem;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;


export const Email = styled.p`
  font-size: 22px;
  text-decoration: none;
  color: #555151;
`;

export const ReadMoreTarif = styled.div`
  display: flex;
  justify-content: center;
  @media (width: 375px) {
    font-weight: bold;
  }
`;

export const Ici = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 7px;
  /* text-shadow: 1px 0 #621010; */
`;

export const Form = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  @media (width: 375px) {
    font-size: 18px;
  }
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

  @media (width: 375px) {
    font-size: 12px;
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

  @media (max-width: 375px) {
    height: 30px;
    width: 30%;
    font-size: 15px;
  }
`;
