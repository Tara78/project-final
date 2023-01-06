import React, { useState } from "react";
import Calendar from "moedim";
// import Calendar from "react-calendar";
import styled from "styled-components";
// import DatePicker from "react-datepicker";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  <Calendar value={date} onChange={(d) => setDate()} />;

  const onChange = () => {
    setDate(date);
  };
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <Wrapper>
  
      <Calendar onChange={onChange} value={date} />
      {/* <Date>{date.toString}</Date> */}

      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
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
