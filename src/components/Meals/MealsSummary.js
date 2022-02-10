import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, entregada inmediata</h2>
      <p>
        Elija su comida favorita de nuestra amplia selección de comidas
        disponibles y disfruta de un delicioso almuerzo o cena en casa.
      </p>
      <p>
        Todas nuestras comidas se cocinan con ingredientes de alta calidad,
        justo a tiempo y por supuesto por chefs experimentados!
      </p>
    </section>
  );
};

export default MealsSummary;
