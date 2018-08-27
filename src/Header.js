import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header(props) {
  return (
    <div className="header">
      <ul className="header-list">
        <a href="#">
          <li className="header-list-item"><FontAwesomeIcon icon="bars" /> Location</li>
        </a>
        <a href="#">
          <li className="header-list-item"><FontAwesomeIcon icon="globe" /> Categories</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
