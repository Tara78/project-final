import React from "react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeFr } from "@mobiscroll/react";

setOptions({
  locale: localeFr,
  theme: "ios",
  themeVariant: "light",
});

function Calendar() {
  return (
    <div>
      <Datepicker controls={["calendar", "time"]} display="inline" />
      <Datepicker controls={["calendar", "timegrid"]} display="inline" />
    </div>
  );
}

export default Calendar;

