import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const pokeManSlice = createSlice({
  name: 'pokeman',
  initialState,
  reducers: {
    pokeAddToCart: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    pokeIncreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    pokeDecreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    PokeDeleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    pokeResetCart: state => {
      state.items = [];
    },
  },
});

export const {
  pokeAddToCart,
  pokeIncreaseQuantity,
  pokeDecreaseQuantity,
  PokeDeleteItem,
  pokeResetCart,
} = pokeManSlice.actions;
export default pokeManSlice.reducer;
