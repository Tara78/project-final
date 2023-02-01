import React, { useState } from "react";
import { Page } from "../Base";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
      <HeroTitle2>{t("contact.HeroTitle2")}</HeroTitle2>
      <p> {t("contact.p")}</p>
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
              {t("contact.InputButton")}
            </InputButton>
          </Form>
        </SectionItem>
        <SectionItem>
          <SectionItemDetails>
            <Address>{t("contact.Address")}</Address>

            <AddressDetaile>
              {/* <FontAwesomeIcon icon={faLocationDot} /> */}
              {t("contact.AddressDetaile")}
            </AddressDetaile>
            <Tarifs>{t("contact.Tarif")}</Tarifs>
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
