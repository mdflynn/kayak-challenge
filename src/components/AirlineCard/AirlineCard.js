import React from "react";
import "./AirlineCard.scss"

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;
  const imgSrc = "https://kayak.com" + logoURL;

  return (
    <article className="card-container">
      <div className="card-title-container">
        <img className="card-img" src={imgSrc} alt={`${name} logo`} />
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
