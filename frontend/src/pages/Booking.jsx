import React, { useState, useEffect, useRef } from "react";
import Calendar from "moedim";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./../utils/utils";
import user from "./../reducers/user";
import booking from "../reducers/booking";
import styled from "styled-components";


// import Calendar from "react-calendar";
// import React from "react";
import {  InlineWidget } from "react-calendly";

const Booking = () => {
  // const [date, setDate] = useState(new Date());
  // console.log("date", date);
  // <Calendar value={date} onChange={(d) => setDate(d)} />;
  // const onChange = () => {
  //   setDate(date);
  // };

  // Access to all avilableTime from the store
  // fetching all time by useEffect.
  // const bookingTime = useSelector((store) => store.booking.items);
  // const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // // useNavigate
  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, [accessToken]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Autorization: accessToken,
  //     },
  //   };
  //   fetch(API_URL("booking/free/:year/:month/:day"), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.response);
  //         dispatch(booking.actions.setItems(data.response));
  //         dispatch(booking.actions.setError(null));
  //       } else {
  //         dispatch(booking.actions.setItems([]));
  //         dispatch(booking.actions.setError(data.response));
  //       }
  //     });
  // }, []);

  // CaldenlyCode 
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

  return (
    <>
      <Wrapper>
        {/* <Calendar onChange={onChange} value={date} /> */}
        {/* <InlineWidget url="https://calendly.com/your_scheduling_page" /> */}
        {/* 
        {bookingTime.map((item) => {
          return (
            <>
              <p>Here </p>
            </>
          );
        })} */}

        <MainCalendlar
          onDateAndTimeSelected={handleDateAndTimeSelected}
          onEventScheduled={handleEventScheduled}
        >
          <InlineWidget
            url={"https://calendly.com/tara197801/50min?month=2023-01"}
            // pageSettings={pageSettings.current}
            // prefill={prefill.current}
            pageSettings={pageSettings}
            prefill={prefill}
            styles={getCalendlyHeightToEnsureNoCrop()}
          />
        </MainCalendlar>
      </Wrapper>
      {/* <Button
        type="button"
        onClick={() => {
          dispatch(user.actions.setAccessToken(null));
          //   navigate("/login");
        }}
      >
        Log Out
      </Button> */}
    </>
  );
};

export default Booking;
const MainCalendlar = styled.div`
width:100vw;
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
