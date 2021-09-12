import React, { useState } from "react";
import "./AirlineCard.scss";

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;
  const [displayDetails, setDisplayDetails] = useState(false);

  const isHovered = displayDetails ? "hover-details" : "hide-details";

  const imgSrc = "https://kayak.com" + logoURL;

  const displayAlliance = (allianceDetails) => {
    let airlineAlliance;

    switch (allianceDetails) {
      case "OW":
        airlineAlliance = "OneWorld";
        break;
      case "ST":
        airlineAlliance = "Sky Team";
        break;
      case "SA":
        airlineAlliance = "Star Alliance";
        break;
      default:
        airlineAlliance = "No Alliance";
    }

    return airlineAlliance;
  };

  return (
    <article
      className={`card-container ${displayDetails ? "hover-border" : ""}`}
      onMouseEnter={() => setDisplayDetails(true)}
      onMouseLeave={() => setDisplayDetails(false)}
    >
      <img className="card-img" src={imgSrc} alt={`${name} logo`} />
      <div className="airline-details">
        <p className={`airline-name ${displayDetails ? "hover-title" : ""}`}>
          {name}
        </p>
        <div className={isHovered}>
          <p className="airline-alliance">{displayAlliance(alliance)}</p>
          <p className="airline-phone">{phone}</p>
          <p className="airline-url">{site}</p>
        </div>
      </div>
    </article>
  );
};

export default AirlineCard;
