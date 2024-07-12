import React, { useState, useEffect } from "react";
import "./SidePanel.css";
import { MenuOutlined, AntDesignOutlined } from "@ant-design/icons";

const SidePanel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
    if (window.innerWidth > 700) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="panelContainer">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <div className="navigation">
        {isMobile ? (
          <a onClick={toggleMenu}>
            <MenuOutlined />
          </a>
        ) : (
          <div className="list">
            <a>
              <AntDesignOutlined /> Overview
            </a>
            <a href="#">
              <AntDesignOutlined /> Appointments
            </a>
            <a href="#">
              <AntDesignOutlined /> Doctors
            </a>
            <a href="#">
              <AntDesignOutlined /> Chats
            </a>
            <h3 className="accountHeader">Account</h3>
            <a href="#">
              <AntDesignOutlined /> Settings
            </a>
            <a href="#">
              <AntDesignOutlined /> Log Out
            </a>
          </div>
        )}
      </div>

      <div className="emergencyContact">
        <p>Emergency Contact Info</p>
      </div>
    </div>
  );
};

export default SidePanel;
