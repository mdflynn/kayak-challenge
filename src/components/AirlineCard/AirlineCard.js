import React from "react";

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;

  return (
    <article className="card-container">
      <div className="card-title-container">
        <img className="card-img" src={logoURL} alt={`${name} logo`} />
        <p className="card-title">{name}</p>
      </div>
      <div className="airline-details">
        <p className="airline-alliance">{alliance}</p>
        <p className="airline-phone">{phone}</p>
        <p className="airline-url">{site}</p>
      </div>
    </article>
  );
};

export default AirlineCard;
