import React, { useEffect, useState } from "react";

import { fetchAirlineData } from "../../apiCalls";

const HomePage = () => {
  const [airlineData, setAirlineData] = useState([]);

  useEffect(() => {
    fetchAirlineData(setAirlineData);
  }, []);
  return <h1>Home Page{airlineData.length > 0 && console.log(airlineData)}</h1>;
};

export default HomePage;
