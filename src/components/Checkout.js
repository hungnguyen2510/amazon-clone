import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
          className="checkout_ads"
        />
        <div>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>

            {/* BasketItem */}
        </div>
      </div>
      <div className="checkout_right">
          <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
