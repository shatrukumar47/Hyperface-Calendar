import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { events } from "../data/data";
import "../styles/Scheduler.css";
import CustomToolbar from "./SchedulerComponents/CustomToolbar";
import CustomEvent from "./SchedulerComponents/CustomEvent";
import CustomTimeSlotWrapper from "./SchedulerComponents/CustomTimeSlotWrapper";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import EventViewModal from "./EventViewModal";
import { useDisclosure } from "@chakra-ui/react";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);
const DraggableCalendar = withDragAndDrop(Calendar);

const Scheduler = () => {
  const [eventData, setEventData] = useState(events);
  const [viewEvent, setViewEvent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEventDrop = (event) => {
    // Update the events array with the new event position
    setEventData((prevEvents) => {
      return prevEvents.map((prevEvent) =>
        prevEvent.id === event.event.id
          ? { ...prevEvent, start: event.start, end: event.end }
          : prevEvent
      );
    });
  };

  const handleEventResize = (event) => {
    let thresholdForAllDayEvent = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    let thresholdForStretchingEvent = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
    // Update the events array with the new event duration
    let updatedEvents = eventData.map((e) => {
      if (e.id === event.event.id) {
        // Check if the duration of the resized event exceeds a certain threshold
        if (event.end - event.start >= thresholdForAllDayEvent) {
          return { ...e, start: event.start, end: event.end, type: "all-day" };
        } else if (
          event.end.getHours() - event.start.getHours() >=
          thresholdForStretchingEvent
        ) {
          return {
            ...e,
            start: event.start,
            end: event.end,
            type: "stretching",
          };
        } else {
          return { ...e, start: event.start, end: event.end, type: "normal" };
        }
      }
      return e;
    });
    setEventData(updatedEvents);
  };

  const handleEventView = (event) => {
    setViewEvent(event);
    onOpen();
  };

  const styleEvent = (event) => {
    let border = "2px solid green";
    let color = "green";
    if (event.type === "stretching") {
      border = "2px solid blue";
      color = "blue";
    } else if (event.type === "all-day") {
      border = "2px solid orange";
      color = "orange";
    }

    const style = {
      border: border,
      background: "white",
      borderRadius: "5px",
      color: event.visibility === "private" ? "red" : color,
    };
    return { style };
  };

  return (
    <div
      className="my-calendar-container"
      style={{ width: "100%", height: "calc(100vh - 100px)" }}
    >
      <DraggableCalendar
        localizer={localizer}
        events={eventData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
        defaultView="day"
        defaultDate={new Date()}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
          timeSlotWrapper: CustomTimeSlotWrapper,
        }}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        eventPropGetter={styleEvent}
        resizable
        onSelectEvent={(event) => handleEventView(event)}
      />

      {viewEvent && (
        <EventViewModal isOpen={isOpen} onClose={onClose} event={viewEvent} />
      )}
    </div>
  );
};

export default Scheduler;
