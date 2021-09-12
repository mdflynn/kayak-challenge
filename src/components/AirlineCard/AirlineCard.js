import React, { useState } from "react";
import "./AirlineCard.scss";

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;
  const [displayDetails, setDisplayDetails] = useState("hide-details");

  const imgSrc = "https://kayak.com" + logoURL;

  return (
    <article
      className="card-container"
      onMouseEnter={() => setDisplayDetails("hover-details")}
      onMouseLeave={() => setDisplayDetails("hide-details")}
    >
      <img className="card-img" src={imgSrc} alt={`${name} logo`} />
      <div className="airline-details">
        <p className="airline-name">{name}</p>
        <div className={displayDetails}>
          <p className="airline-alliance">{alliance}</p>
          <p className="airline-phone">{phone}</p>
          <p className="airline-url">{site}</p>
        </div>
      </div>
    </article>
  );
};

export default AirlineCard;
