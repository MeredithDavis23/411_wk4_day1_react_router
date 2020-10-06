import React from "react";
import cars from "../cars.json";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  console.log(props.match.params.id);
  return <h1>A specific car</h1>;
};

export default Car;
