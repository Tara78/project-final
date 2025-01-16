import React, { useState } from "react";
import { Page } from "../Base";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tarif from "./Tarif";
import {
  WrapperSecondPart,
  HeroTitle2,
  AppointmentsInfo,
  SectionItem,
  Textarea,
  Tarifs,
  Address,
  Mobile,
  AddressDetaile,
  AddressStreet,
  AddressDetaileCity,
  Email,
  Form,
  Label,
  Input,
  InputButton,
  SectionItemDetails,
  ReadMoreTarif,
  Ici,
} from "./Contact.styles";
import { useTranslation } from "react-i18next";
/* import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
 */
const Contact = () => {
  const navigate = useNavigate();
  const navigateToTarif = () => {
    navigate("/tarif");
  };

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

/*   const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('****', 'template_****', form.current, '****')
      .then((result) => {
        console.log(result.text);
        alert('Message sending successfully!');
        form = "";
      }, (error) => {
        console.log(error.text);
      });
    }
  } */
 /*  https://stackoverflow.com/questions/73795082/sending-email-in-react-js */
  return (
    <Page>
      <HeroTitle2>{t("contact.HeroTitle2")}</HeroTitle2>
      <AppointmentsInfo> {t("contact.p")}</AppointmentsInfo>
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

            <AddressDetaileCity>
            {t("contact.AddressStreet")}
            </AddressDetaileCity>

            <AddressDetaileCity>
              {t("contact.AddressDetaileCity")}
            </AddressDetaileCity>
              <Tarifs>
              {t("contact.Tarif")}
              <ReadMoreTarif onClick={navigateToTarif}>
                {t("contact.Click")}<Ici>{t("home.Ici")}</Ici>
                <Routes>
                  <Route
                    path="/tarif"
                    type="navigate to Tarif page"
                    element={<Tarif />}
                  />
                </Routes>
              </ReadMoreTarif>
            </Tarifs>
            <Mobile>Mobile: +33 6 11 69 89 27 </Mobile>
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
