import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      // console.log(action);
      state.basket = [...state.basket, action.payload];
      // state.basket = {
      //   ...state,
      //   ,
      // };
      // console.log(action);
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
