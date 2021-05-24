import React, { useEffect } from "react";
import "./Home.css";
import Sidebar from "./SideBar";
import Body from "./Body";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Home;
