import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;

  const hasItems = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cardCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    const body = JSON.stringify({
      user: userData,
      orderedItem: cardCtx.items,
    });

    console.log("Data a enviar: ", body);

    setisSubmitting(true);

    await fetch(
      "https://react-http-9dad6-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: body,
      }
    );
    setisSubmitting(false);
    setDidSubmit(true);
    cardCtx.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Cancelar
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Ordenar
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Monto Total</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckOut && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={() => setIsCheckOut((prevState) => !prevState)}
        />
      )}

      {!isCheckOut && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Enviando datos de la orden...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Orden enviada satisfactoriamente!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Cancelar
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && !didSubmit && cartModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
