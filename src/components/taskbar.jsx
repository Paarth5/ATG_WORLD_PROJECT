import React, { useState } from "react";
const Taskbar = () => {
  const [joined, setJoined] = useState(false);
  const handleClick = () => {
    return setJoined(!joined);
  };
  return (
    <div className="taskbar-cont">
      <div>
        <ul className="taskbar-links">
          <li>
            <a href="/" className="taskbar-link active-link">
              All Posts(32)
            </a>
          </li>
          <li>
            <a href="/" className="taskbar-link">
              Article
            </a>
          </li>
          <li>
            <a href="/" className="taskbar-link">
              Event
            </a>
          </li>
          <li>
            <a href="/" className="taskbar-link">
              Education
            </a>
          </li>
          <li>
            <a href="/" className="taskbar-link">
              Job
            </a>
          </li>
        </ul>
      </div>
      <div className="taskbar-btns">
        <button className="post-btn">
          Write a Post
          <img
            src="./assets/images/downArrow.svg"
            alt=""
            className="post-btn-icon"
          />
        </button>
        <button className="join-btn" onClick={handleClick}>
          {joined || (
            <img
              src="./assets/images/join_grp.svg"
              alt=""
              className="join-btn-icon"
            />
          )}
          {joined ? "Leave Group" : "Join Group"}
        </button>
      </div>
    </div>
  );
};

export default Taskbar;
