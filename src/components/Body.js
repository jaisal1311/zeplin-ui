import React from "react";
import "./Body.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
const Body = () => {
  return (
    <div className="body">
      <Nav />
      <div className="body__dashboard">
        <Dashboard />
      </div>
    </div>
  );
};

export default Body;
