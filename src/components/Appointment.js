import React, { useState } from "react";
import "./Appointment.css";
import Switch from "@material-ui/core/Switch";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LinkIcon from "@material-ui/icons/Link";
const Appointment = () => {
  const [checked, setChecked] = useState(true);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="appointment">
      <div className="appointment__info">
        <div className="appointment__title">
          <h3>Title</h3>
          <Switch size="small" checked={checked} onChange={toggleChecked} />
        </div>
        <p>
          <span>
            <AccessTimeIcon style={{ fontSize: 12 }} />
          </span>
          45 mins @ Rs.50
        </p>
      </div>
      <div className="appointment__members">
        <div className="appointment__membersList">
          <p>TS</p>
          <p>TS</p>
        </div>

        <div className="appointment__link">
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
