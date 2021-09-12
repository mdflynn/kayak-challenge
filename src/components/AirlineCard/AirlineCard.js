import React from "react";

const AirlineCard = ({ airlineDetails }) => {
  return (
    <article className="card-container">
      <div className="card-title-container">
        <img className="card-img" />
        <p className="card-title">Title</p>
      </div>
      <div className="airline-details">
        <p className="airline-alliance">Alliance</p>
        <p className="airline-phone">Phone</p>
        <p className="airline-url">Url</p>
      </div>
    </article>
  );
};

export default AirlineCard;
