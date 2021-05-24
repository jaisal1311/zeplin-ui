import React, { useState, useEffect } from "react";
import "./Events.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Appointment from "./Appointment";
const Events = ({ eventTitle, events }) => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="events">
      <div className="events__category">
        <h3>{eventTitle}</h3>
        {toggle ? (
          <KeyboardArrowUpIcon
            className="events__toggle"
            onClick={() => {
              onToggle();
            }}
          />
        ) : (
          <KeyboardArrowDownIcon
            className="events__toggle"
            onClick={() => {
              onToggle();
            }}
          />
        )}
      </div>
      {toggle && (
        <div className="events__row">
          {events.map((event) => {
            return <Appointment {...event} key={event.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Events;
