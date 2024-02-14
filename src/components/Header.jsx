import React from "react";
import "../styles/Header.css";
import { FaCaretDown } from "react-icons/fa";
import { FaXmark, FaArrowUpRightFromSquare  } from "react-icons/fa6";
import { format} from "date-fns";

const Header = () => {
  const date = new Date();
  const today = format(date, "ccc, dd MMM");


  const handleViewCalendar = () => {};

  const handleOpeninNewWindow = () => {};

  const handleClose = () => {};

  return (
    <div className="header-container">
      <div className="text-content">
        <p>CALENDAR</p>
        <div onClick={handleViewCalendar}>
          <h3>{today}</h3>
          <FaCaretDown />
        </div>
      </div>
      <div className="icon-content">
        <div onClick={handleOpeninNewWindow}>
          <FaArrowUpRightFromSquare  />
        </div>
        <div onClick={handleClose}>
          <FaXmark />
        </div>
      </div>
    </div>
  );
};

export default Header;
