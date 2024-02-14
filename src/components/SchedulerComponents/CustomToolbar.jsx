import { FaAngleLeft, FaAngleRight, FaEllipsisVertical } from "react-icons/fa6";
import "../../styles/SchedulerStyles/CustomToolbar.css";
import { useState } from "react";

const CustomToolbar = ({ label, onView, onNavigate, views }) => {
  const [showMenu, setShowMenu] = useState(false);


  const handleNavigate = (action) => {
    onNavigate(action);
  };

  const handleChangeView = (view) => {
    onView(view);
    setShowMenu(false)
  };

  console.log("label : ", label)

  return (
    <div className="customtool-container">
      <div className="left-right-nav-container">
        <p onClick={() => handleNavigate("TODAY")}>Today</p>
        <div className="navs">
          <div onClick={() => handleNavigate("PREV")}>
            <FaAngleLeft />
          </div>
          <div onClick={() => handleNavigate("NEXT")}>
            <FaAngleRight />
          </div>
        </div>
        <div className="label">{label}</div>
      </div>
      <div className={`menu ${showMenu ? "active" : ""}`}>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FaEllipsisVertical />
        </div>
        {showMenu && (
          <div className="menu-list">
            {views?.map((view) => {
              return (
                <p key={view} onClick={() => handleChangeView(view)}>
                  {view.toUpperCase()}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomToolbar;
