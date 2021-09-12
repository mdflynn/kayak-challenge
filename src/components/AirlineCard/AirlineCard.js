import React, { useState } from "react";
import "./AirlineCard.scss";

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;
  const [displayDetails, setDisplayDetails] = useState(false);

  const isHovered = displayDetails ? "hover-details" : "hide-details";

  const imgSrc = "https://kayak.com" + logoURL;

  return (
    <article
      className={`card-container ${displayDetails ? "hover-border" : ""}`}
      onMouseEnter={() => setDisplayDetails(true)}
      onMouseLeave={() => setDisplayDetails(false)}
    >
      <img className="card-img" src={imgSrc} alt={`${name} logo`} />
      <div className="airline-details">
        <p className="airline-name">{name}</p>
        <div className={isHovered}>
          <p className="airline-alliance">{alliance}</p>
          <p className="airline-phone">{phone}</p>
          <p className="airline-url">{site}</p>
        </div>
      </div>
    </article>
  );
};

export default AirlineCard;
