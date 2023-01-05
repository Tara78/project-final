import React, { useState } from "react";
import Calendar from "moedim";
// import Calendar from "react-calendar";
import styled from "styled-components";
import DatePicker from "react-datepicker";

const Booking = () => {
    const [value, setValue, onChange] = useState(new Date());
      <Calendar value={value} onChange={(d) => setValue(d)} />;
       const [startDate, setStartDate] = useState(new Date());
  return (
    <Wrapper>
      {/* <Calendar></Calendar> */}
      <Calendar onChange={onChange} value={value} />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </Wrapper>
  );
};

export default Booking;

const Wrapper = styled.div`
width: 50%;
display:flex;
align-items: center;
justify-content: center;
`;

// const Calendar = styled.div``;
