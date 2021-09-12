import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import { v4 as uuidv4 } from "uuid";

import { fetchAirlineData } from "../../apiCalls";
import AirlineCard from "../AirlineCard/AirlineCard";

const HomePage = () => {
  const [airlineData, setAirlineData] = useState([]);

  useEffect(() => {
    fetchAirlineData(setAirlineData);
  }, []);

  const generateAirlineCards = () => {
    return airlineData.map((airline) => {

      const cardKey = uuidv4();

      return <AirlineCard key={cardKey} airlineDetails={airline} />;
    });
  };

  return (
    <section>
      {airlineData.length > 0 && generateAirlineCards()}
    </section>
  );
};

export default HomePage;
