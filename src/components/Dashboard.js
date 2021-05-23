import React from "react";
import "./Dashboard.css";
import Search from "./Search";
import Events from "./Events";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Search />
      <Events />
      <Events />
      <Events />
    </div>
  );
};

export default Dashboard;
