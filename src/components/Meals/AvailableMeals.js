import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

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

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
