import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__header">
        <h2>View Events</h2>
      </div>
      <div className="nav__actions">
        <div className="nav__notifIcon">
          <NotificationsIcon />
        </div>
        <div className="nav__oftag">
          <p>OF</p>
        </div>
        <p>Omar Faizan</p>
      </div>
    </div>
  );
};

export default Nav;
