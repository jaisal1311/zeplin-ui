import React from "react";
import "./Dashboard.css";
import Search from "./Search";
import Events from "./Events";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const eventList = useSelector((state) => state.eventReducer);

  return (
    <div className="dashboard">
      <Search />

      {/* Since, eventList is an object and not list I used the Object.entries which return list of key value pairs */}
      {Object.entries(eventList).map(([key, value]) => {
        return <Events eventTitle={key} events={value} />;
      })}
    </div>
  );
};

export default Dashboard;
