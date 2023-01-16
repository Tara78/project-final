import React, { useState } from "react";
import styled from "styled-components";
import { Page } from "../components/Base";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [telephone, setTelephone] = useState("");
  const handleClick = () => {
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  return (
    <Page>
      <h1>Contact</h1>
      <HeroTitle2>Les rdv se prennent de vive voix au 06 23 16 65 75 ou en ligne.</HeroTitle2>

      <p>
        Pour les commandes de livres dédicacés et tout autre sujet, envoyez-moi
        un message via le formulaire ci-dessous.
      </p>

      <WrapperSecondPart>
        <SectionForm>
          <Form
            action="mailto: nicolasgestalt92@gmail.com?subject=contact"
            method="post"
            enctype="text/plain"
          >
            <Label>
              <Input
                type="text"
                value={name}
                name="name"
                placeholder="Votre prénom et votre nom"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Label>
            <Label>
              <Input
                type="email"
                value={email}
                name="email"
                placeholder="Votre adresse email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Label>
            <Label>
              <Input
                type="string"
                name="telephone"
                value={telephone}
                placeholder="Votre Téléphone (sans espace ni point)"
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
              />
            </Label>

            <Textarea
              name="message"
              value={message}
              type="text"
              placeholder="Votre Message ... "
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <InputButton type="submit" onClick={handleClick}>
              Envoyer
            </InputButton>
          </Form>
        </SectionForm>
        <SectionContactInfo>
          <Address>Adresse de CORRESPONDANCE UNIQUEMENT :</Address>
          <AddressDetaile>
            99 avenue Achille Peretti 92200 Neuilly-sur-Seine
          </AddressDetaile>
          <Tarifs>Pour les consultations, cf la page Tarifs et RDV</Tarifs>
          <Mobile>Mobile: +33 611 69 8927 </Mobile>
          <Email as="a" href="nicolasgestalt92@gmail.com">
            nicolasgestalt92@gmail.com
          </Email>
        </SectionContactInfo>
      </WrapperSecondPart>
    </Page>
  );
};

const WrapperSecondPart = styled.div`
  width: 95%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
  column-gap: 2.5rem;
`;

const HeroTitle2 = styled.h2`
  font-size: 22px;
  font-weight: bold; 
`;

const SectionForm = styled.div`
  height: 600px;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #edf1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const SectionContactInfo = styled.div`
  height: 600px;
  font-size: 25px;
  border-radius: 10px;
  background-color: #edf1f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const Textarea = styled.textarea`
  height: 200px;
  margin: 1rem;
  border: 1px solid #2e1eab;
  border-radius: 5px;
  font-size: bold;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Address = styled.h5`
  font-size: 22px;
  color: #413e3e;
  padding-top: 3rem;
`;

const Tarifs = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #413e3e;
`;

const Mobile = styled.p`
  font-size: 22px;
  padding-top: 5rem;
`;

const AddressDetaile = styled.p`
  font-size: 22px;
  margin-top: -20px;
`;

const Email = styled.p`
  font-size: 22px;
`;

const Form = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Label = styled.label`
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

const Input = styled.input.attrs((props) => ({
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

const InputButton = styled.button`
  height: 40px;
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
  background-color: #bccff1;
  &:hover {
    background-color: #b2c0c8;
  }
  &:active {
    background-color: #97b0cc;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default Contact;
