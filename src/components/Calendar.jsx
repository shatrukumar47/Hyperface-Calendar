import React, { useState } from "react";
import Header from "./Header";
import Scheduler from "./Scheduler";

const Calendar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const handleChangeView = () => {
    setIsMobileView(!isMobileView);
  };
  return (
    <div
      style={{
        width: isMobileView ? "400px" : "100%",
        height: "100vh",
        background: "white",
        boxShadow: "0px 0px 5px white",
        padding: "0px 3px 3px 3px",
        borderRadius: "5px",
      }}
    >
      <Header handleChangeView={handleChangeView} />
      <Scheduler />
    </div>
  );
};

export default Calendar;
