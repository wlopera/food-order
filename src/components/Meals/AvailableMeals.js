import React from "react";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Los mejores pescados y verduras",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Escalope",
    description: "Los mejores pescados y verduras",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Hamburguesa Barbacoa",
    description: "Americano, crudo, carnoso",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Tazón verde",
    description: "Saludable... y verde...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <sección className={classes.meals}>
      <ul>{mealsList}</ul>
    </sección>
  );
};

export default AvailableMeals;
