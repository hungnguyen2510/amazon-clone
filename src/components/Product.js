import React from "react";
import "./Product.css";
import { selectBasket, addToBasket } from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";

const Product = ({ id, title, image, price, rating }) => {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const handleAddToBasket = () => {
    //dispatch the item into the data layer
    dispatch(
      addToBasket({
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      })
    );
  };
  return (
    <div key={id} className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product_image" />
      <button className="product_button" onClick={handleAddToBasket}>
        Add To Basket
      </button>
    </div>
  );
};
export default Product;
