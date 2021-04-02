import React, { useMemo, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { selectBasket } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Subtotal = () => {
  const basket = useSelector(selectBasket);
  const history = useHistory();
  const subTotal = useMemo(() => {
    return basket.reduce((amount, item) => item.price + amount, 0);
  }, [basket]);

  // useEffect(() => console.log(subTotal), [subTotal]);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subTotal}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
