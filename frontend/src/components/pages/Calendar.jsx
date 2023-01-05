import React from "react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions, localeFr } from "@mobiscroll/react";

setOptions({
  locale: localeFr,
  theme: "ios",
  themeVariant: "light",
});

function App() {
  return (
    <Page>
      <Datepicker
        controls={["calendar"]}
        selectMultiple={false}
        inputProps={{
          label: "Date",
          inputStyle: "box",
          labelStyle: "stacked",
          placeholder: "Please Select...",
        }}
      />
      <Datepicker
        controls={["calendar", "time"]}
        selectMultiple={false}
        inputProps={{
          label: "Date & time",
          inputStyle: "box",
          labelStyle: "stacked",
          placeholder: "Please Select...",
        }}
      />
      <Datepicker
        controls={["calendar", "timegrid"]}
        selectMultiple={false}
        inputProps={{
          label: "Date & timegrid",
          inputStyle: "box",
          labelStyle: "stacked",
          placeholder: "Please Select...",
        }}
      />
    </Page>
  );
}

export default App;
