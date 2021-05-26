import React from "react";
import "./Appointment.css";
import Switch from "@material-ui/core/Switch";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LinkIcon from "@material-ui/icons/Link";
import { useDispatch } from "react-redux";
import { toggle_event } from "../redux/actions/eventActions";
const Appointment = ({
  id,
  title,
  isEnabled,
  price,
  duration,
  attendees,
  type,
  link,
}) => {
  const dispatch = useDispatch();
  const toggleChecked = () => {
    dispatch(toggle_event(id, type));
  };
  return (
    <div className="appointment">
      <div className="appointment__info">
        <div className="appointment__title">
          <h3>{title}</h3>
          <Switch size="small" checked={isEnabled} onChange={toggleChecked} />
        </div>
        <p>
          <span>
            <AccessTimeIcon style={{ fontSize: 12 }} />
          </span>
          {duration} mins @ Rs.{price}
        </p>
      </div>
      <div className="appointment__members">
        <div className="appointment__membersList">
          {attendees.map((att) => {
            return <p className="appointment__member">{att}</p>;
          })}
        </div>

        <div className="appointment__link">
          <a href={link}>
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
