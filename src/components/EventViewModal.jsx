import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

const EventViewModal = ({ isOpen, onClose, event }) => {
  const startTime = format(event.start, "h:mm a");
  const endTime = format(event.end, "h:mm a");
  const startDate = format(event.start, "MM/dd/yyyy");
  const endDate = format(event.end, "MM/dd/yyyy");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          textAlign={"center"}
          paddingBottom={"30px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
        >
          <Text fontSize={"25px"} fontWeight={"bold"} color={"tomato"}>
            {event?.title}
          </Text>
          <Text fontWeight={"500"} color={"green"}>
            Start : {startDate} - {startTime}
          </Text>
          <Text fontWeight={"500"} color={"red"}>
            End : {endDate} - {endTime}
          </Text>
          <Text color={"grey"}>
            Visibility : {event.visibility.toUpperCase()}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventViewModal;
