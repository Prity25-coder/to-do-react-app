import React from "react";
import TimeDate from "../TimeDate/TimeDate";
import "./TopNav.css";
import CreateReactTask from "../CreateTask/CreateTask";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav__logo">
        <p>To-Do App</p>
      </div>
      <div className="topNav__navigation">
        <ul>
          <CreateReactTask />
          {/* <li>Show To-Do</li> */}
        </ul>
      </div>
      <div className="topNav__time">
        <TimeDate />
      </div>
    </div>
  );
};

export default TopNav;
