import React from "react";
import "./MainChart.css";

const MainCharts = () => {
  return (
    <div className="mainCharts">
      <div className="welcomeMessage">
        <h4>Welcome to Boluwatife,</h4>
      </div>
      <div className="row">
        <div className="chart">
          <img src="/chart1.png" alt="Chart 1" />
        </div>
        <div className="chart">
          <img src="/chart1.png" alt="Chart 1" />
        </div>
        <div className="chart">
          <img src="/chart1.png" alt="Chart 1" />
        </div>
      </div>

      <div className="row">
        <div className="chart">
          <img src="/map.png" alt="Chart 1" />
        </div>
        <div className="chart">
          <img src="/map1.png" alt="Chart 1" />
        </div>
      </div>

      <div className="row">
        <div className="chart">
          <img src="/table.png" alt="Chart 1" />
        </div>
      </div>
    </div>
  );
};

export default MainCharts;
