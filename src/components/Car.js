import React from "react";
import cars from "../cars.json";
// import material ui components here //
import { Container, Paper, Chip } from "@material-ui/core";
// Container, Paper, Chip //
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const Car = (props) => {
  const classes = useStyles();
  let id = props.match.params.id;
  let car = cars.find((car) => car.id === Number(id));
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper elevation={5}>
        <Chip label={`id: ${car.id}`} />
        <Chip label={`Car Name: ${car.Name}`} />
        <Chip label={`Year: ${car.Year}`} />
        <Chip label={`Origin: ${car.Origin}`} />
        <Chip label={`Cylinders: ${car.Cylinders}`} />
        <Chip label={`Horsepower: ${car.Horsepower}`} />
        <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
        <Chip label={`Displacement: ${car.Displacement}`} />
        <Chip label={`Weight: ${car.Weight_in_lbs}`} />
      </Paper>
    </Container>
  );
};

export default Car;
