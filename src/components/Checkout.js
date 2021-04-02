import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";
import { selectUser } from "../features/userSlice";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const baskets = useSelector(selectBasket);
  const user = useSelector(selectUser);
  // console.log(baskets);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
          className="checkout_ads"
        />
        <div>
          <h3>Hello, {user ? user[0].email : ""}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {baskets.map((basket) => (
            <BasketItem
              key={basket.id}
              id={basket.id}
              title={basket.title}
              price={basket.price}
              image={basket.image}
              rating={basket.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
