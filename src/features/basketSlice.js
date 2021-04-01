import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
