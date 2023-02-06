import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import {Wrapper, BackHomeButton, Button, MainCalendlar} from "./Booking.styles"

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
        <MainCalendlar typ="monthly calendar"
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
      <BackHomeButton>
        <Button type="button" onClick={navigateToHome}>
          Accueil
        </Button>
      </BackHomeButton>
    </>
  );
};



export default Booking;
