import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <SidePanel />
        <Header />
      </div>
     
    </>
  );
};

export default Home;
