import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      localStorage.setItem("items", state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
