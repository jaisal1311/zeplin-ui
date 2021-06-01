import React from "react";
import "./Home.css";
import Sidebar from "./SideBar";
import Body from "./Body";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Home;
