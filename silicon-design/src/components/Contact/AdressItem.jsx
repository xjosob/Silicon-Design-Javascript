import React from "react";

const AdressItem = ({ name, location, phone, hours }) => {
  return (
    <div className="medical-center">
      <h4>{name}</h4>
      <p>
        <span className="material-icons-outlined">location_on</span> {location}
      </p>
      <p>
        <span className="material-icons-outlined">phone_in_talk</span> {phone}
      </p>
      <div className="times-wrapper">
        <div className="time-entry">
          <span className="material-icons-outlined">schedule</span>
          <div className="time-text">
            <b>{hours.weekdays.split(": ")[0]}</b>:
            {hours.weekdays.split(": ")[1]}
          </div>
        </div>
        <div className="time-entry no-icon">
          <div className="time-text">
            <b>{hours.weekend.split(": ")[0]}</b>:{" "}
            {hours.weekend.split(": ")[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressItem;
