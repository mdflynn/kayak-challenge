import React, { useState } from "react";
import "./AirlineCard.scss";

const AirlineCard = ({ airlineDetails }) => {
  const { alliance, logoURL, name, phone, site } = airlineDetails;
  const [displayDetails, setDisplayDetails] = useState(false);

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

  const isHovered = displayDetails ? "hover-details" : "hide-details";

  const addHoverBorderStyle = displayDetails ? "hover-border" : "";

  const addHoverTitleStyle = displayDetails ? "hover-title" : "";

  return (
    <article
      className={`card-container ${addHoverBorderStyle}`}
      onMouseEnter={() => setDisplayDetails(true)}
      onMouseLeave={() => setDisplayDetails(false)}
    >
      <img className="card-img" src={imgSrc} alt={`${name} logo`} />
      <div className="airline-details">
        <p className={`airline-name ${addHoverTitleStyle}`}>{name}</p>
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
