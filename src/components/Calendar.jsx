import React from "react";
import Header from "./Header";
import Scheduler from "./Scheduler";

const Calendar = () => {
  return (
    <div
      style={{
        width: "400px",
        background: "white",
        boxShadow: "0px 0px 5px white",
        padding: "0px 3px 3px 3px",
        borderRadius: "5px",
      }}
    >
      <Header />
      <Scheduler />
    </div>
  );
};

export default Calendar;
