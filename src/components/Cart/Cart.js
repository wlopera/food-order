import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;

  const hasItems = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cardCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Monto Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Cancelar
        </button>
        {hasItems && <button className={classes.button}>Ordenar</button>}
      </div>
    </Modal>
  );
};

export default Cart;
