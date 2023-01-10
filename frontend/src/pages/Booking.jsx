import React, { useState } from "react";
import Calendar from "moedim";
// import Calendar from "react-calendar";
import styled from "styled-components";
// import React from "react";
// import { InlineWidget } from "react-calendly";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  console.log("date", date);
  <Calendar value={date} onChange={(d) => setDate(d)} />;

  const onChange = () => {
    setDate(date);
  };

  return (
    <Wrapper>
      <Calendar onChange={onChange} value={date} />

      {/* <InlineWidget url="https://calendly.com/your_scheduling_page" /> */}
    </Wrapper>
  );
};

export default Booking;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Date = styled.div`
// `;