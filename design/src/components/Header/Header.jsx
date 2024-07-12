import React from "react";
import "./Header.css";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import MainCharts from "../Charts/MainCharts";
import RightChart from "../Charts/RightChart";

const Header = () => {
  return (
    <div className="topContainer">
      <div className="headerContainer">
        <div className="headerPanel">
          <div className="searchContainer">
            <SearchOutlined className="searchIcon" />
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
          </div>

          <div className="user">
            <div className="notificationContainer">
              <BellOutlined className="bellIcon" />
            </div>
            <div className="avatarContainer">
              <span className="username">Username</span>
            </div>
          </div>
        </div>
      </div>

      <div className="charts">
        <MainCharts />
        <RightChart />
      </div>
    </div>
  );
};

export default Header;
