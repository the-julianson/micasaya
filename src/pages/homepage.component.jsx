import React, { useState } from "react";
import "../houses.json";

const HomePage = () => {
  const [houses, setHouses] = useState({});

  const fetchHouses = () => {
    fetch("../houses.json")
      .then(resp => resp.json())
      .then();
  };

  return <h1>Houses will come here</h1>;
};

export default HomePage;
