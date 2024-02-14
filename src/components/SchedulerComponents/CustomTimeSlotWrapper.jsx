import React from "react";

const CustomTimeSlotWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "none",
        margin: "2px",
        color: "grey",
      }}
    >
      {children}
    </div>
  );
};

export default CustomTimeSlotWrapper;
