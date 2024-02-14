import React from "react";
import "../../styles/SchedulerStyles/CustomEvent.css";
import { format } from "date-fns";

const CustomEvent = ({ event }) => {
  const formattedStartTime = format(event.start, "h:mm a");
  const formattedEndTime = format(event.end, "h:mm a");

  return (
    <div className="custom-event-container">
      <p>{event.visibility === "private" ? "Busy" : event.title}</p>
      <p>
        {formattedStartTime} - {formattedEndTime}
      </p>
    </div>
  );
};

export default CustomEvent;
