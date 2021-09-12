import React, { useEffect, useState } from "react";
import "./HomePage.scss";
// generate unique id's for keys
import { v4 as uuidv4 } from "uuid";

import { fetchAirlineData } from "../../apiCalls";
import AirlineCard from "../AirlineCard/AirlineCard";
import Filter from "../Filter/Filter";

const HomePage = () => {
  const [airlineData, setAirlineData] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    fetchAirlineData(setAirlineData);
  }, []);

  const generateAirlineCards = (data) => {
    return data.map((airline) => {
      const cardKey = uuidv4();

      return <AirlineCard key={cardKey} airlineDetails={airline} />;
    });
  };

  const updateFilteredAirlines = () => {
    return airlineData.filter((airline) =>
      filterOptions.includes(airline.alliance)
    );
  };

  const determineDisplay =
    filterOptions.length > 0 ? updateFilteredAirlines() : airlineData;

  return (
    <main className="main">
      <p className="main-title">Airlines</p>
      <p className="main-filter">Filter By Alliances</p>
      <Filter filter={setFilterOptions} />
      <section className="card-display">
        {airlineData.length > 0 && generateAirlineCards(determineDisplay)}
      </section>
    </main>
  );
};

export default HomePage;
