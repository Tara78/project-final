import React, { useState } from "react";
import Calendar from "moedim";
// import Calendar from "react-calendar";
import styled from "styled-components";

const Booking = () => {
    const [value, setValue] = useState(new Date());
      <Calendar value={value} onChange={(d) => setValue(d)} />;
  return (
    <Wrapper>
      <Calendar></Calendar>
    </Wrapper>
  );
};

export default Booking;

const Wrapper = styled.div``;

// const Calendar = styled.div``;
