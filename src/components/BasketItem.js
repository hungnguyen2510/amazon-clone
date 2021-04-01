import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../features/basketSlice";
import "./BasketItem.css";

const BasketItem = ({ id, title, price, rating, image }) => {
  const dispatch = useDispatch();
  const handleRemoveFromBasket = (id) => {
    dispatch(
      removeFromBasket({
        id: id,
      })
    );
  };

  return (
    <div className="basketItem">
      <img src={image} className="basketItem_image"></img>
      <div className="basketItem_info">
        <p className="basketItem_title">{title}</p>
        <p className="basketItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i.toString()}>⭐</p>
            ))}
        </div>
        <button onClick={() => handleRemoveFromBasket(id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
