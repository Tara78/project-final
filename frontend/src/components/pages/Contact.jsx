import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const EmailContactForm = () => {
 const form = useRef();
 const sendEmail = (e) => {
   e.preventDefault();
  //  emailjs
    //  .sendForm(
    //    "YOUR_SERVICE_ID",
    //    "YOUR_TEMPLATE_ID",
    //    form.current,
    //    "YOUR_PUBLIC_KEY"
    //  )
    //  .then(
    //    (result) => {
    //      // show the user a success message
    //    },
    //    (error) => {
    //      // show the user an error
    //    }
    //  );
 };
}


  return (
    <div>
      <Hero>
        <HeroBackgroundImg></HeroBackgroundImg>
        <HeroTitle>Contact</HeroTitle>
        <HeroSubText>
          Les rdv se prennent de vive voix au 06 23 16 65 75 ou en ligne.
        </HeroSubText>
        <HeroText>
          Pour les commandes de livres dédicacés et tout autre sujet,
          envoyez-moi un message via le formulaire ci-dessous.
        </HeroText>
      </Hero>

      <WrapperSecondPart>
        <SectionForm>
          <Form
          // ref={form} onSubmit={sendEmail}
          >
            <Label>
              <Input
                type="text"
                name="user_name"
                placeholder="Name"
                // size="10px"
              />
            </Label>
            <Label>
              <Input
                type="email"
                name="user_email"
                placeholder="Email"
                // size="10px"
              />
            </Label>
            <Label>Write your message below!</Label>
            <InputMessage type="text"></InputMessage>
            {/* <Textarea name="message" /> */}
            <InputButton type="submit" value="Send" />
          </Form>
        </SectionForm>
        <SectionContactInfo>
          <Address>
            <span>
              <FontAwesomeIcon icon="fa-regular fa-location-dot" />
            </span>
            Adresse de CORRESPONDANCE UNIQUEMENT :
          </Address>
          <AddressDetaile>
            99 avenue Achille Peretti 92200 Neuilly-sur-Seine
          </AddressDetaile>
          <Tarifs>Pour les consultations, cf la page Tarifs et RDV</Tarifs>
          <Mobile>Mobile:+33.6.11.69.89.27 </Mobile>
          <Email 
            as= "a" href="mailto:nverdeille@outlook.com"
            > 
            nverdeille@outlook.com
          </Email>
        </SectionContactInfo>
      </WrapperSecondPart>
    </div>
  );
};

export default Contact;
const Hero = styled.div``;
const HeroBackgroundImg = styled.div``;

const HeroTitle = styled.h1``;
const HeroSubText = styled.h5``;

const HeroText = styled.p``;

const WrapperSecondPart = styled.div`
  width: 95%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  column-gap: 2.5rem;
  /* background-color: #435aa6; */
`;

const SectionForm = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const SectionContactInfo = styled.div`
  height: auto;
  margin-bottom: 1rem;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #d9dee1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

// const FontAwesomeIcon = styled.i`

// `

const Address = styled.h5`
  font-size: 22px;
  color: #413e3e;
  padding:1rem;
`;
const Tarifs = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #413e3e;
`;
const Mobile = styled.p`
  font-size: 22px;
`;

const AddressDetaile = styled.p`
  font-size: 22px;
  margin-top: -20px;

`;
const Email = styled.p`
  font-size: 22px;
`;

const Form= styled.div`
height: auto;
width:100%;
display: flex;
flex-direction: column;
padding:1.5rem;
  `
const Label = styled.label`
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  /* gap: 8px; */
  margin: 8px;
`;
const Input = styled.input.attrs( props => ({
  // I define static props
  type: "text",

  // I define dynamic ones
  size: props.size || "10px",
}))`
  color: #2e1eab;
  font-size: 1em;
  border: 1px solid ;
  border-radius: 5px;

  /* here I used the dynamically computed prop */
  margin: ${ props => props.size};
  padding: ${ props => props.size};
`;

// const Textarea= styled.span`
// height: 200px;
// width: 90%;
// background-color: #0000;
  
// `
const InputButton = styled.input`
  height: 40px;
  width: 30%;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2e1eab;
  border-radius: 5px;
  margin: 1.3rem;
`;

const InputMessage = styled.input`
  height: 200px;
  margin: 1rem;
  border: 1px solid #2e1eab;
  border-radius: 5px;
`;