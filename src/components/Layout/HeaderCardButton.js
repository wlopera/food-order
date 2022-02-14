import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Tu Carrito</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
