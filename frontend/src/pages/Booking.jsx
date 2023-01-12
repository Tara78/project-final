import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  const navigate = useNavigate();

  const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);
  const prefill = {
    name: "name",
    email: "email",
  };

  const pageSettings = {
    primaryColor: "417658",
    textColor: "251e35",
    backgroundColor: "f7f5f4",
    hideLandingPageDetails: true,
    hideEventTypeDetails: true,
  };
  function getCalendlyHeightToEnsureNoCrop() {
    if (!isTimeSelected) return { height: 600 };
    if (isDoneScheduling) return { height: 450 };
    return { height: 1060 };
  }

  function handleDateAndTimeSelected() {
    setTimeSelected(true);
  }

  function handleEventScheduled() {
    setDoneScheduling(true);
  }

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <MainCalendlar
          onDateAndTimeSelected={handleDateAndTimeSelected}
          onEventScheduled={handleEventScheduled}
        >
          <InlineWidget
            url={"https://calendly.com/tara197801/gustald-therapy"}
            pageSettings={pageSettings}
            prefill={prefill}
            styles={getCalendlyHeightToEnsureNoCrop()}
          />
        </MainCalendlar>
      </Wrapper>
      <div>
        <p onClick={navigateToHome}>Pratiques et prise ici</p>
  
      </div>
    </>
  );
};

export default Booking;
const MainCalendlar = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Button = styled.button`
//   font-family: "Inconsolata";
//   padding: 6px 15px;
//   font-weight: bold;
//   font-size: 17px;
//   background: none;
//   border: 2px solid rgb(66, 65, 66);
//   width: 150px;
//   margin: 15px 30px 30px;
//   cursor: pointer;
//   color: rgb(26, 0, 26);
//   border-radius: 8px;
// `;
