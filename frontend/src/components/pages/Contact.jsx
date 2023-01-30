import React, { useState } from "react";
import { Page } from "../Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  WrapperSecondPart,
  HeroTitle2,
  SectionItem,
  Textarea,
  Tarifs,
  Address,
  Mobile,
  AddressDetaile,
  Email,
  Form,
  Label,
  Input,
  InputButton,
  SectionItemDetails,
} from "./Contact.styles";

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
      <HeroTitle2>
        Les rdv se prennent de vive voix au 06 23 16 65 75 ou en ligne.
      </HeroTitle2>
      <p>
        Pour les commandes de livres dédicacés et tout autre sujet, envoyez-moi
        un message via le formulaire ci-dessous.
      </p>
      <WrapperSecondPart>
        <SectionItem>
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
        </SectionItem>
        <SectionItem>
          <SectionItemDetails>
            <Address>Adresse de CORRESPONDANCE UNIQUEMENT :</Address>
            
            <AddressDetaile>
              {/* <FontAwesomeIcon icon={faLocationDot} /> */}
              99 avenue Achille Peretti 92200 Neuilly-sur-Seine
            </AddressDetaile>
            <Tarifs>Pour les consultations, cf la page Tarifs et RDV</Tarifs>
            <Mobile>Mobile: +33 611 69 8927 </Mobile>
            <Email as="a" href="nicolasgestalt92@gmail.com">
              nicolasgestalt92@gmail.com
            </Email>
          </SectionItemDetails>
        </SectionItem>
      </WrapperSecondPart>
    </Page>
  );
};

export default Contact;
