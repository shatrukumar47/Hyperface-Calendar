import React from "react";

const CustomTimeIndicator = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%", // Position the time indicator line at the center of the calendar
        left: 0,
        right: 0,
        height: "5px", // Set the height of the time indicator line
        backgroundColor: "red", // Set the color of the time indicator line
        zIndex: 9999, // Ensure the time indicator line appears above other calendar elements
      }}
    />
  );
};

export default CustomTimeIndicator;
