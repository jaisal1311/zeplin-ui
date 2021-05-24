import React from "react";
import "./Dashboard.css";
import Search from "./Search";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const eventList = useSelector((state) => state.eventReducer);
  const sales = eventList.sales;
  const marketing = eventList.marketing;
  const tech = eventList.tech;
  return (
    <div className="dashboard">
      <Search />
      <Events eventTitle="Sales" events={sales} />
      <Events eventTitle="Tech" events={tech} />
      <Events eventTitle="Marketing" events={marketing} />
    </div>
  );
};

export default Dashboard;
