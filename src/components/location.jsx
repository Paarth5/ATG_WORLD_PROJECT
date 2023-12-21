import React from "react";

const location = () => {
  return (
    <>
      <div className="location-cont">
        <img
          src=".\assets\images\location.svg"
          alt="location"
          className="location-icon"
        />
        <input
          type="text"
          name="location"
          id="location"
          value="Noida, India"
          readOnly
          className="location-input"
        />
        <img src=".\assets\images\edit.svg" alt="Edit" className="edit-icon" />
      </div>
      <div className="warning-cont">
        <img
          src=".\assets\images\error.svg"
          alt="Warning"
          className="warning-icon"
        />
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </>
  );
};

export default location;
